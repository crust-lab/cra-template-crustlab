import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import storage from 'redux-persist/lib/storage';
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
import { rickyApi } from '../services/rickyApi/rickyApi';
import { authApi } from '../services/authApi/authApi';
import authReducer, { authReducerPath } from './reducers/auth/authSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: [authReducerPath],
  blacklist: [rickyApi.reducerPath, authApi.reducerPath],
};

const appReducer = combineReducers({
  [rickyApi.reducerPath]: rickyApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [authReducerPath]: authReducer,
});

const persistedReducer = persistReducer(persistConfig, appReducer);
const middlewares = [rickyApi.middleware];

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
