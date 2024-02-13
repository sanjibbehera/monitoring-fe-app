import { AlertFilled, HomeFilled, SafetyCertificateFilled } from '@ant-design/icons';
import { Menu, MenuProps } from "antd";
import { useRouter } from 'next/router';


const itemStyle = { flexGrow: 1, height: '100%', lineHeight: '25px', padding: "26px" };



export default function Sidebar() {
    const route = useRouter()

    const items: MenuProps['items'] = [
        {
            key: '/dashboard',
            icon: <HomeFilled />,
            label: 'Dashboard',
            style: { ...itemStyle, flexDirection: 'column', },
            onClick: () => route.push('/dashboard')
        },
        {
            key: '/alerts',
            icon: <AlertFilled />,
            label: 'Alerts',
            style: { ...itemStyle, flexDirection: 'column', },
            onClick: () => route.push('/alerts')
        },
        {
            key: '/security',
            icon: <SafetyCertificateFilled />,
            label: 'Security',
            style: { ...itemStyle, flexDirection: 'column', },
            onClick: () => route.push('/security')
        },
    ]

    return (
        <>
            <div >Company Logo</div>
            <Menu
                mode='inline'
                items={items}
                defaultSelectedKeys={['/dashboard']}
                selectedKeys={[`${route.pathname}`]}
            />
        </>
    )
}
