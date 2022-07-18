import {
  BaseQueryFn,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/dist/query/react';
import { Mutex } from 'async-mutex';
import { logout, tokenReceived } from '../../store/reducers/auth/authSlice';
import { RootState } from '../../store/store';
import authApiPaths from './authApiPaths';
import { QueryExtraOptions } from './authApiTypes';

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_AUTH_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const {
      auth: { accessToken },
    } = getState() as RootState;

    if (accessToken) headers.set('authorization', `Bearer ${accessToken}`);
    return headers;
  },
});

const authQueryWithReAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  QueryExtraOptions
> = async (args, api, extraOptions = { showError: true }) => {
  await mutex.waitForUnlock();
  let result = await baseQuery(args, api, extraOptions);
  const {
    auth: { refreshToken },
  } = api.getState() as RootState;

  if (result.error && result.error.status === 401) {
    if (refreshToken) {
      if (!mutex.isLocked()) {
        const release = await mutex.acquire();
        try {
          //TODO: Handle refresh token request
          const refreshResult = await baseQuery(
            {
              url: authApiPaths.v1.token.refresh,
              method: 'POST',
              body: {
                refresh: refreshToken,
              },
            },
            api,
            extraOptions
          );

          if (refreshResult.data) {
            const { access } = refreshResult.data as { access: string };
            if (access) {
              api.dispatch(
                tokenReceived({ accessToken: access, refreshToken })
              );
            }

            result = await baseQuery(args, api, extraOptions);
          } else api.dispatch(logout());
        } finally {
          release();
        }
      } else {
        await mutex.waitForUnlock();
        result = await baseQuery(args, api, extraOptions);
      }
    } else api.dispatch(logout());
  }

  if (result.error && extraOptions?.showError) {
    //TODO: Here u can handle api errors global notifications
  }

  return result;
};

export default authQueryWithReAuth;
