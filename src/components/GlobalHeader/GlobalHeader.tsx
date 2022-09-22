import './globalHeader.model.less'
import classNames from 'classnames'
import env from '@/utils/env'

const GlobalHeader = () => {
  return (
    <div className={classNames('globalHeader')}>
      <h1>{env.VITE_APP_TITLE}</h1>
    </div>
  )
}
export default GlobalHeader
