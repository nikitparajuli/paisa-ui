import React from 'react';
import { Layout } from 'antd';

import { AppHeader, Logo } from './'; 

type AppLayoutProps = {};

const { Header, Content, Footer } = Layout;

const LayoutStyle = {
    minHeight: '100vh'
}

const HeaderStyle = {
    background: '#ff8700',
    padding: '0 15px'
}

const ContentStyle = {
    margin: 20,
    textAlign: 'center' as const
}

const FooterStyle = {
    fontSize: 10,
    textAlign: 'center' as const
}

export const AppLayout: React.FC<AppLayoutProps> = () => {
    return (
        <Layout className="app-viewport" style={LayoutStyle}>
            <Header style={HeaderStyle}>
                <AppHeader />
            </Header>
            <Content style={ContentStyle}>
                <div style={{ fontSize: 40 }}>
                    <Logo showText color="#ff8700"/>
                </div>
                <div>
                    An attempt to create a better payment and e-commerce platform for Nepal
                </div>
            </Content>
            <Footer style={FooterStyle}>Paisa ©2020 Nikit Parajuli</Footer>
        </Layout>
    );
}
