import { Color } from '@/utils/color';
import { CodepenCircleOutlined, LogoutOutlined, SettingFilled } from '@ant-design/icons';
import { Button, Dropdown, MenuProps, Space, Typography } from 'antd';

const items: MenuProps['items'] = [
    {
        key: '1',
        icon: <LogoutOutlined />,
        label: 'Logout',
        onClick: () => {
            console.log('Logout');
            localStorage.removeItem("token");
            window.location.href = "/"
            return;
        }
    }
]


function CustomHeader() {
    return (
        <Space size={"large"} style={{ float: "right" }}>
            <Button size='middle' type="text" shape="circle">
                <SettingFilled />
            </Button>
            <Dropdown menu={{ items }} trigger={['click']} placement='bottom' >
                <a onClick={(e) => e.preventDefault()}>
                    <Space>
                        <Typography.Text style={{ color: Color.BASIC_WHITE }} strong> <CodepenCircleOutlined />
                        </Typography.Text>
                        <Typography.Text style={{ color: Color.BASIC_WHITE }} strong> Welcome User!
                        </Typography.Text>
                    </Space>
                </a>
            </Dropdown>
        </Space>
    )
}

export default CustomHeader