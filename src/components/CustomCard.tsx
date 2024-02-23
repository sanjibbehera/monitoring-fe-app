import { ArrowUpOutlined, EllipsisOutlined } from "@ant-design/icons";
import { Button, Card, Dropdown, Flex, Progress, Space, Typography } from "antd";
import Image from "next/image";

interface CustomCarProps {
    title: string;
    color: string;
    bgColor: string;
    progressProps: any;
    titleIcon: string;
    percentage: any;
    average: any;
    cardMenu?: any;
    index?: number;
}
const thumbIconStyle = {
    // fontSize: 40,
    color: '#0021F5',
    backgroundColor: '#C0E1FF',
    padding: 15,
    borderRadius: 15,
};

const coloredThumbIconStyle = (color: string, bgColor: string) => ({
    ...thumbIconStyle,
    color,
    backgroundColor: bgColor,
});

const { Text } = Typography;



export const CustomCard = ({ title, color, bgColor, progressProps, titleIcon, percentage, average, cardMenu, index }: CustomCarProps) => (

    <Card key={index} style={{ width: "100%", marginInline: 5 }} bordered={false}>
        <div style={{ position: "absolute", right: 10, top: 10 }} >
            {cardMenu && <Dropdown menu={cardMenu} trigger={['click']} >
                <Button shape="circle" icon={<EllipsisOutlined />} />
            </Dropdown>}
        </div>
        <Flex vertical gap={3}>
            <Space size="middle">
                <div style={coloredThumbIconStyle(color, bgColor)}>
                    <center> <Image src={titleIcon} alt={'logo'} width={30} height={30} /></center>
                </div>
            </Space>
            <Text>{title}</Text>
            <Text strong>{`${title === "DISK" ? percentage.replace('%', '') : `${percentage}%`} `}<ArrowUpOutlined /></Text>
            <Text>Avg +{average ? average : <>65</>}%</Text>
            <Progress {...progressProps} showInfo={false} />
        </Flex>
    </Card>
);

