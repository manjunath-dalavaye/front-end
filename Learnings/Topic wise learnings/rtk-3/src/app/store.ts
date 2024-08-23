// configureStore sets up the Redux store and accepts a reducer object
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
// counterReducer handling the counter state slice


export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
