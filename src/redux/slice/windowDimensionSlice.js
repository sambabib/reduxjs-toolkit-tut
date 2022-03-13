import { createSlice } from '@reduxjs/toolkit';

export const windowDimensionSlice = createSlice({
  name: 'windowDimension',
  initialState: {
    width: window.innerWidth,
  },
  reducers: {
    resizeWidth: (state) => {
      state.width = window.innerWidth;
    },
  },
});

export const { resizeWidth } = windowDimensionSlice.actions;

export default windowDimensionSlice.reducer;
