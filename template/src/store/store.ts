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
import { rickyApi } from '../services/ricky-api/ricky-api';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: [rickyApi.reducerPath],
};

const appReducer = combineReducers({
  [rickyApi.reducerPath]: rickyApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, appReducer);
const middlewares = [rickyApi.middleware]


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
