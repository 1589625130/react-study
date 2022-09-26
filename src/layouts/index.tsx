import { Outlet } from 'react-router-dom'
import { ReactElement } from 'react'

export default (): ReactElement => {
  return (
    <div>
      <Outlet />
    </div>
  )
}
