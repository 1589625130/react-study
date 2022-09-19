import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  count: number;
}

const counter = createSlice({
  name: "counter",
  initialState: (): CounterState => ({
    count: 0,
  }),
  reducers: {
    increment: (state) => {
      console.log("increment");
      state.count += 1;
    },
    decrement: (state) => {
      console.log("decrement");
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = counter.actions;

export default counter.reducer;
