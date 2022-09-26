import { Layout } from 'antd'
import { FC, ReactElement } from 'react'
import './styles.less'
import { GlobalHeader, GlobalMenu } from '@/components'
import { Outlet } from 'react-router-dom'

interface ProLayoutProps {
  children: ReactElement
}

const { Header, Sider, Content } = Layout
const ProLayout: FC<ProLayoutProps> = ({ children }): ReactElement => {
  return (
    <Layout className="layout">
      <Header>
        <GlobalHeader />
      </Header>
      <Layout>
        <Sider theme="light">
          <GlobalMenu />
        </Sider>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default ProLayout
