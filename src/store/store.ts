import { configureStore } from '@reduxjs/toolkit';
import { shipsApi } from '../slices/shipsApiSlice';

export const store = configureStore({
  reducer: {
    [shipsApi.reducerPath]: shipsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(shipsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

