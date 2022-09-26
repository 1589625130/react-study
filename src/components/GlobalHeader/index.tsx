import './globalHeader.model.less'
import classNames from 'classnames'
import env from '@/utils/env'
import { FC, ReactElement } from 'react'

export const GlobalHeader: FC = (): ReactElement => {
  return (
    <div className={classNames('g"globalHeader">
      <h1>{env.VITE_APP_TITLE}</h1>
    </div>
  )
};
