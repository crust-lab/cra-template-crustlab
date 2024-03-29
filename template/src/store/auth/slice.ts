import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { batch } from 'react-redux';
import { AppDispatch } from '..';
import { authApi } from '../../services/authApi';
import { useAppSelector } from '../hooks';
import { TAuthState, TTokenReceivedPayload } from './types';

const initialState: TAuthState = {
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    tokenReceived: (
      state,
      {
        payload: { accessToken, refreshToken },
      }: PayloadAction<TTokenReceivedPayload>
    ) => {
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
    },
    clearTokens: (state) => {
      state.accessToken = initialState.accessToken;
      state.refreshToken = initialState.refreshToken;
    },
  },

  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.postLogin.matchFulfilled,
      (state, { payload: { access, refresh } }) => {
        state.accessToken = access;
        state.refreshToken = refresh;
      }
    );
  },
});

export const authReducerPath = authSlice.name;

export const { tokenReceived, clearTokens } = authSlice.actions;

export const logout = () => (dispatch: AppDispatch) =>
  batch(() => {
    dispatch(clearTokens());
    dispatch(authApi.util.resetApiState());
  });
//TODO: Here u can cleanup data after logout action

export const useIsAuthorizedSelector = () =>
  useAppSelector(({ auth }) => auth.accessToken !== null);

export default authSlice.reducer;
