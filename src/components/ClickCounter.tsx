import WithCounter, { CounterProps } from "@/hoc/WithCounter";

const ClickCounter = WithCounter((props: CounterProps) => {
  const { count, incrementCount } = props;
  return (
    <div>
      <button onClick={incrementCount}>点击{count}次</button>
    </div>
  );
});

export default ClickCounter;
