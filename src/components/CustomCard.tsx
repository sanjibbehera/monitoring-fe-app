import { ArrowUpOutlined } from "@ant-design/icons";
import { Card, Flex, Progress, Space, Typography } from "antd";

interface CustomCarProps {
    title: string;
    color: string;
    bgColor: string;
    progressProps: any;
    titleIcon: React.ReactNode;
    percentage: number;
    average: number;
}
const thumbIconStyle = {
    fontSize: 40,
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



export const CustomCard = ({ title, color, bgColor, progressProps, titleIcon, percentage, average }: CustomCarProps) => (
    <Card style={{ width: "100%", marginInline: 5 }} bordered={false}>
        <Flex vertical gap={3}>
            <Space size="middle">
                <div style={coloredThumbIconStyle(color, bgColor)}>
                    {titleIcon}  {/* <GlobalOutlined /> */}
                </div>
            </Space>
            <Text>{title}</Text>
            <Text strong>{percentage}% <ArrowUpOutlined /></Text>
            <Text>Avg +{average}%</Text>
            <Progress {...progressProps} showInfo={false} />
        </Flex>
    </Card>
);

