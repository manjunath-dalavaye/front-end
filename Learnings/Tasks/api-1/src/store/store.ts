// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../api/apiSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,  // Adds the API slice to the store
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),  // Adds the middleware for caching, invalidation, polling, and other features of RTK Query
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
