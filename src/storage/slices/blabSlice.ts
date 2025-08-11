'use client';

import { createSlice } from '@reduxjs/toolkit';

const blabSlice = createSlice({
  name: "blab",
  initialState: {
    shouldBlab: false
  },
  reducers: {
    startBlab: (state) => { state.shouldBlab = true; },
    stopBlab: (state) => { state.shouldBlab = false }
  }
});
const blabReducer = blabSlice.reducer;

export const { startBlab, stopBlab } = blabSlice.actions;
export default blabReducer;