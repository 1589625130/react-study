import React, {
  FC,
  JSXElementConstructor,
  ReactElement,
  useState,
} from "react";

// 创建一个hoc
// 1. 传入一个组件
// 2. 返回一个新的组件
// 3. 新的组件中包裹传入的组件
// 4. 新的组件中可以对传入的组件进行一些操作

export interface CounterProps {
  count: number;
  incrementCount: () => void;
}

const WithCounter = (
  WrappedComponent: FC<CounterProps> | JSXElementConstructor<CounterProps>
): FC<any> => {
  return (props): ReactElement => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
      setCount(count + 1);
    };
    return (
      <WrappedComponent
        count={count}
        incrementCount={incrementCount}
        {...props}
      />
    );
  };
};

export default WithCounter;
