import { Layout } from "antd";
import { FC, ReactElement } from "react";
import GlobalHeader from "@/components/GlobalHeader/GlobalHeader";
import "./styles.less";
import GlobalMenu from "@/components/GlobalMenu";
import { Outlet } from "react-router-dom";

// useStyleRegister({ theme: {   },()=>( { prefix: 'pro-layout' })

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
