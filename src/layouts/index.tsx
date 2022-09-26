import { Outlet } from 'react-router-dom'
import { ReactElement, useState } from 'react'
import { PageContainer, ProLayout } from '@ant-design/pro-layout'
import { routes } from '@/router'

export default (): ReactElement => {
  console.log('layouts')
  // if (!checkToken()) {
  //   return <Navigate to="/login" replace={true} />
  // }

  const [pathname, setPathname] = useState<string>('/')

  return (
    <ProLayout location={{ pathname }} route={routes}>
      <PageContainer>
        <Outlet />
      </PageContainer>
    </ProLayout>
  )
}
