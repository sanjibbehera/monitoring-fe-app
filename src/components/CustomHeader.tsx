import { CodepenCircleOutlined, SettingFilled } from '@ant-design/icons';
import { Dropdown, MenuProps, Space } from 'antd';

const items: MenuProps['items'] = [
    {
        key: '1',
        icon: <SettingFilled />,
        label: '',
    },
    {
        key: '2',
        icon: <CodepenCircleOutlined />,
        label: 'Welcome User!',
    }
]


function CustomHeader() {
    return (
        <Space style={{ float: "right" }}>
            <Dropdown menu={{ items }} trigger={['click']} placement='bottom' >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <CodepenCircleOutlined />
                        Welcome User!
                    </Space>
                </a>
            </Dropdown>
        </Space>
    )
}

export default CustomHeader