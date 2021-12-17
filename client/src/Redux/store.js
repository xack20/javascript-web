import { configureStore } from '@reduxjs/toolkit';
import commonReducer from './CommonSlice';

export default configureStore({
  reducer: {
    common: commonReducer,
  },
  devTools: process.env.NODE_ENV !== "PRODUCTION",
});
