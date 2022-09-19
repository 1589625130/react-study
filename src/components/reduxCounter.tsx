import React from "react";
import { decrement, increment, incrementByAmount } from "../store/counter";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { Button } from "antd";

export default function Counter() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </Button>
        <span>{count}</span>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
        <Button
          onClick={() => {
            dispatch(incrementByAmount(123));
          }}
        >
          测试传参
        </Button>
      </div>
    </div>
  );
}
