import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 8
};
const counter = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    addCount(state: CounterState, action: PayloadAction<number>) {
      state.count += action.payload;
    }
  }
});
export const { addCount } = counter.actions;
export default counter.reducer;
