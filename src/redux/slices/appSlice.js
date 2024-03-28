import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: { isMobile: false },
  reducers: {
    setIsMobile(state, action) {
      state.isMobile = action.payload;
    },
  },
});

export const { setIsMobile } = appSlice.actions;

export default appSlice.reducer;
