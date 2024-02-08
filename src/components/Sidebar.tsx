import { AlertFilled, HomeFilled, SafetyCertificateFilled } from '@ant-design/icons';
import { Menu, MenuProps } from "antd";


const itemStyle = { flexGrow: 1, height: '100%', lineHeight: '25px', padding: "26px" };

const items: MenuProps['items'] = [
    {
        key: '1',
        icon: <HomeFilled />,
        label: 'Dashboard',
        style: { ...itemStyle, flexDirection: 'column', },
    },
    {
        key: '2',
        icon: <AlertFilled />,
        label: 'Alerts',
        style: { ...itemStyle, flexDirection: 'column', },
    },
    {
        key: '3',
        icon: <SafetyCertificateFilled />,
        label: 'Security',
        style: { ...itemStyle, flexDirection: 'column', },
    },
]

export default function Sidebar() {
    return (
        <>
            <div >Company Logo</div>
            <Menu
                mode='inline'
                items={items}

            />
        </>
    )
}
