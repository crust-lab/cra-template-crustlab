import { useState } from 'react';
import { createApi } from '@reduxjs/toolkit/query/react';
import authApiPaths from './authApiPaths';
import authQueryWithReAuth from './authApiQuery';
import { LoginRequest, LoginResponse } from './authApiTypes';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: authQueryWithReAuth,
  endpoints: (builder) => ({
    postLogin: builder.mutation<LoginResponse, LoginRequest>({
      query: ({ email, password }) => ({
        url: authApiPaths.v1.token.login,
        method: 'POST',
        body: {
          email,
          password,
        },
      }),
    }),
  }),
});

type ErrorType = {
  message: string;
  statusCode: number;
};
type UsePostLoginMutation = [
  (postData: LoginRequest) => Promise<LoginResponse>,
  { isLoading: boolean; error?: ErrorType }
];

// It is only mock for login request
export const usePostLoginMutation = (): UsePostLoginMutation => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorType>();

  const postLogin = ({ email, password }: LoginRequest) => {
    setIsLoading(true);
    setError(undefined);
    return new Promise<LoginResponse>((res) =>
      setTimeout(() => {
        if (email === 'admin@123.com' && password === 'admin123') {
          setIsLoading(false);
          res({ access: 'FAKE_ACCESS_TOKEN', refresh: 'FAKE_REFRESH_TOKEN' });
          return;
        }
        setError({ statusCode: 401, message: 'Incorrect email or password' });
        setIsLoading(false);
      }, 2000)
    );
  };

  return [postLogin, { isLoading, error }];
};

// Before uncomment this line of code, make sure you define process.env.REACT_APP_AUTH_API_URL in .env file
// export const { usePostLoginMutation } = authApi;
