import React from 'react';
import { Layout, Menu, Icon } from 'antd';

import { Logo } from './'; 

type AppLayoutProps = {};

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const AppLayout: React.FC<AppLayoutProps> = () => {
    const [collapsed, setCollapsed] = React.useState(true);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
                <div className="logo" style={{color: '#fff', padding: 5, textAlign: 'center'}}><Logo /></div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <Icon type="home" />
                        <span>Home</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="user" />
                                <span>User</span>
                            </span>
                        }
                    >
                        <Menu.Item key="2">Profile</Menu.Item>
                        <Menu.Item key="3">Orders</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <Icon type="team" />
                                <span>Support</span>
                            </span>
                        }
                    >
                        <Menu.Item key="4">Claims</Menu.Item>
                        <Menu.Item key="5">Help</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="6">
                        <Icon type="info-circle" />
                        <span>About</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }} />
                <Content style={{ margin: 20, textAlign: 'center' }}>
                    <div style={{ fontSize: 40 }}>
                        <Logo />
                    </div>
                    <div>
                        An attempt to create a better payment and e-commerce platform for Nepal
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center',  fontSize: 10 }}>Paisa ©2020 Nikit Parajuli</Footer>
            </Layout>
        </Layout>
    );
}
