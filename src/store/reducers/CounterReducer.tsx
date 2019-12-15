import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 8
};
const counterReducer = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    addCount(state: CounterState, action: PayloadAction<number>) {
      state.count++;
    }
  }
});
export const { addCount } = counterReducer.actions;
export default counterReducer.reducer;
