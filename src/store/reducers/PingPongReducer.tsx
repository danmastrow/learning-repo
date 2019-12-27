import { createSlice } from "@reduxjs/toolkit";

export interface PingPongState {
  isPinging: boolean;
}

const initialState: PingPongState = {
  isPinging: false
};
const pingPong = createSlice({
  name: "pingPong",
  initialState: initialState,
  reducers: {
    ping(state) {
      state.isPinging = true;
    },
    pong(state) {
      state.isPinging = false;
    }
  }
});
export const { ping, pong } = pingPong.actions;
export default pingPong.reducer;
