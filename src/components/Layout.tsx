import { Layout as AntLayout, Flex } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import CustomHeader from './CustomHeader';
import Sidebar from './Sidebar';


const { Header, Sider, Content } = AntLayout;

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#fff',
};

const contentStyle: React.CSSProperties = {
    backgroundColor: '#F1F2FB',
    lineHeight: '64px',
};

const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '100px',
    overflow: 'auto',
    height: '100vh',
    position: 'fixed',
    left: 0,
    top: 0,
    bottom: 0
};

const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
};


function Layout({ children }: any) {
    const router = useRouter();
    useEffect(() => {
        // If user is already authenticated, redirect to Dashboard
        const token = typeof window !== 'undefined' && localStorage.getItem('token') || ''
        if (token === '') {
            router.push('/')
        }
    }, [router]);
    return (
        <div className='App'>
            <Flex gap="middle" wrap="wrap">
                <AntLayout style={layoutStyle} hasSider>
                    <Sider theme='light' trigger={null} style={siderStyle}>
                        <Sidebar />
                    </Sider>
                    <AntLayout style={{ marginLeft: 190 }}>
                        <Header style={headerStyle}>
                            <CustomHeader />
                        </Header>
                        <Content style={contentStyle}><main>{children}</main></Content>
                    </AntLayout>
                </AntLayout>
            </Flex>
        </div>
    )
}

export default Layout