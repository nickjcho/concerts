'use client';

import { configureStore } from "@reduxjs/toolkit";
import blabReducer from "./slices/blabSlice";

export const store = configureStore({
  reducer: {
    blab: blabReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;