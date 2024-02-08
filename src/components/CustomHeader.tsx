import { CodepenCircleOutlined, SettingFilled } from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';

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
        <Menu
            mode='horizontal'
            items={items}
            style={{ float: 'right', width: '250px' }}
        />
    )
}

export default CustomHeader