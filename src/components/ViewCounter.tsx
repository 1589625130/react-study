import { Button, Progress } from 'antd'
import WithCounter, { CounterProps } from '../hoc/WithCounter'

const ViewCounter = (props: CounterProps) => {
  const { count, incrementCount } = props
  return (
    <div>
      <Progress percent={count} />
      <Button onClick={incrementCount}>进度+1</Button>
    </div>
  )
}

export default WithCounter(ViewCounter)
