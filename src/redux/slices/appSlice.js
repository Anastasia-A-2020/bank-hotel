import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMobile: false,
    isShowMobileMenu: false,
  },
  reducers: {
    setIsMobile(state, action) {
      state.isMobile = action.payload;
    },
    setIsShowMobileMenu(state) {
      state.isShowMobileMenu = !state.isShowMobileMenu;
    },
  },
});

export const { setIsMobile, setIsShowMobileMenu } = appSlice.actions;

export default appSlice.reducer;
