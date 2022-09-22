import { Outlet } from 'react-router-dom'
import ProLayout from '@/pro-components/ProLayout'
import { FC, ReactElement } from 'react'

const MainLayout: FC = (): ReactElement => {
  return (
    <ProLayout>
      <Outlet />
    </ProLayout>
  )
}
export default MainLayout
