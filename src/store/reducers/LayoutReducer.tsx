import { createSlice } from "@reduxjs/toolkit";

export interface LayoutState {
  sidebarCollapsed: boolean;
}

const initialState: LayoutState = {
  sidebarCollapsed: false
};
const layout = createSlice({
  name: "layout",
  initialState: initialState,
  reducers: {
    toggleSidebar(state: LayoutState) {
      state.sidebarCollapsed = !state.sidebarCollapsed;
    }
  }
});
export const { toggleSidebar } = layout.actions;
export default layout.reducer;
