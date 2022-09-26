import { Outlet } from 'react-router-dom'
import { ProLayout } from '@ant-design/pro-components'
import { FC, ReactElement } from 'react'

const MainLayout: FC = (): ReactElement => {
  return (
    <ProLayout>
      <Outlet />
    </ProLayout>
  )
}
export default MainLayout
