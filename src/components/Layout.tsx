import { Layout as AntLayout, Flex } from 'antd';
import React from 'react';

const { Header, Footer, Sider, Content } = AntLayout;

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',

    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#4096ff',
};

const contentStyle: React.CSSProperties = {
    textAlign: 'center',

    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#0958d9',
};

const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#1677ff',
};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
};

const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    // width: 'calc(50% - 8px)',
    // maxWidth: 'calc(50% - 8px)',
};


function Layout({ children }: any) {
    return (
        <Flex gap="middle" wrap="wrap">
            <AntLayout style={layoutStyle}>
                <Sider width="25%" style={siderStyle}>
                    Sider
                </Sider>
                <AntLayout>
                    <Header style={headerStyle}>Header</Header>
                    <Content style={contentStyle}>s<main>{children}</main></Content>
                    <Footer style={footerStyle}>Footer</Footer>
                </AntLayout>
            </AntLayout>
        </Flex>
    )
}

export default Layout