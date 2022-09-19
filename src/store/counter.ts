import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { message } from "antd";

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
      state.count += 1;
    },
    decrement: (state) => {
      if (state.count === 0) {
        void message.error("Count cannot be less than 0");
        return;
      }
      state.count -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counter.actions;

export default counter.reducer;
