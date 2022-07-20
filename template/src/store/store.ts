import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authApi } from '../services/authApi/authApi';
import { usersApi } from '../services/usersApi/usersApi';
import authReducer, { authReducerPath } from './reducers/auth/authSlice';
import usersReducer, { usersReducerPath } from './reducers/users/usersSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: [authReducerPath, usersReducerPath],
  blacklist: [usersApi.reducerPath, authApi.reducerPath],
};

const appReducer = combineReducers({
  [usersApi.reducerPath]: usersApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [authReducerPath]: authReducer,
  [usersReducerPath]: usersReducer,
});

const persistedReducer = persistReducer(persistConfig, appReducer);
const middlewares = [usersApi.middleware];

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(...middlewares),
  devTools: process.env.NODE_ENV === 'development',
});

setupListeners(store.dispatch);

export const persist = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
