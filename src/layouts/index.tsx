import { Outlet } from 'react-router-dom'
import { FC, ReactElement, useEffect, useState } from 'react'
import { PageContainer, ProLayout } from '@ant-design/pro-layout'
import { routes } from '@/router'

const layouts: FC = (): ReactElement => {
  console.log('layouts')
  // if (!checkToken()) {
  //   return <Navigate to="/login" replace={true} />
  // }

  const [pathname, setPathname] = useState<string>('/')
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(false)
  }, [])
  return (
    <ProLayout
      defaultCollapsed={true}
      siderWidth={200}
      menu={{
        autoClose: false,
      }}
      fixSiderbar={true}
      fixedHeader={true}
      loading={loading}
      location={{ pathname }}
      route={routes}>
      <PageContainer>
        <Outlet />
      </PageContainer>
    </ProLayout>
  )
}
export default layouts
