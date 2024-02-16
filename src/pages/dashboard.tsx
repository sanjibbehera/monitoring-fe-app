import { CustomCard } from '@/components/CustomCard';
import Layout from '@/components/Layout';
import { Color } from '@/utils/color';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Card, Col, Flex, List, Progress, Row, Space, Typography } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { CSSProperties, useEffect, useState } from 'react';
import CPULogo from '../../public/Electronics.svg';
import SeverIcon from '../../public/Server.svg';
import RamLogo from '../../public/SystemTask.svg';
import DiskLogo from '../../public/USBMemoryStick.svg';
import AlertFlesh from '../../public/alertPhishing.svg';
import ServerRequestIcon from '../../public/serverRequest.svg';
import { dashboardData, getS3Data } from './api/dashboard';



const divStyle: CSSProperties = { paddingInline: 15, paddingTop: 10 }

const cardContainerStyle = {
    padding: 15,
    borderRadius: 10,
};
const cardImageStyle = {
    ...cardContainerStyle,
    backgroundColor: Color.GRADIENT_ORANGE,
};
const cardImageContainerStyle = {
    ...cardContainerStyle,
    backgroundColor: Color.GRADIENT_LIGHT_BLUE,
};
const cardTextStyle = {
    fontSize: 14,
};
const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 2',
    },
];


function Dashboard() {

    const { Text } = Typography
    const route = useRouter()
    const [response, setResponse] = useState([]);
    const [usageData, setUsageData] = useState([]);
    const [avgUsageData, setAvgUsageData] = useState(0);
    const [cardsData, setCardsData] = useState([]);
    useEffect(() => {
        const fetchCardItems = async () => {
            const result = await dashboardData();
            if (result !== null) {
                const usageItems: any = {
                    cpu: result?.data?.cpu?.pop(),
                    disk: result?.data?.disk.pop(),
                }
                const cardsItems: any = [
                    {
                        name: "CPU",
                        percentage: parseFloat(usageItems.cpu?.cpuData[0]?.Maximum).toFixed(2),
                        color: Color.PRIMARY_BLUE,
                        icon: CPULogo,
                        average: parseFloat(avgUsageData.toString()).toFixed(2),
                        progressProps: { percent: parseFloat(usageItems.cpu?.cpuData[0]?.Maximum).toFixed(2), strokeColor: Color.PRIMARY_BLUE },
                        bgColor: Color.SECONDARY_BLUE,
                    },
                    {
                        name: "RAM",
                        percentage: 30,
                        color: Color.PRIMARY_ORANGE,
                        icon: RamLogo,
                        average: 27,
                        progressProps: { percent: 50, strokeColor: Color.PRIMARY_ORANGE },
                        bgColor: Color.GRADIENT_ORANGE,
                    },
                    {
                        name: "DISK",
                        percentage: usageItems.disk?.size / 100,
                        color: Color.PRIMARY_BLUE,
                        icon: DiskLogo,
                        average: usageItems.disk?.size / 100,
                        progressProps: { percent: usageItems.disk?.size, strokeColor: Color.PURPLE },
                        bgColor: Color.SECONDARY_BLUE,
                    },
                    {
                        name: "SERVICES",
                        percentage: 30,
                        color: Color.PRIMARY_RED,
                        icon: RamLogo,
                        average: 27,
                        progressProps: { percent: 50, strokeColor: Color.PRIMARY_RED },
                        bgColor: Color.CREAM,
                    }
                ]
                setCardsData(cardsItems);
            }
        }
        fetchCardItems();
        getS3Data().then((data) => {
            setResponse(data.data.data);
        }).catch((error) => { console.error(error) })

    }, [])
    return (
        <Layout>
            <div>
                <div style={divStyle}>
                    <Row gutter={16}>
                        <Col span={16}>
                            <Flex justify='space-evenly' align='center'>
                                {cardsData.length > 0 && cardsData.map((card: { name: string, color: string, icon: any, average: any, percentage: string | number, progressProps: { percentage: number, strokeColor: string }, bgColor: string }, index) => (
                                    <CustomCard
                                        key={index}
                                        title={card.name}
                                        color={card.color}
                                        titleIcon={card.icon}
                                        average={card.average}
                                        percentage={card.percentage}
                                        progressProps={card.progressProps}
                                        bgColor={card.bgColor}
                                    />
                                ))}
                            </Flex>
                            <Space style={{ marginTop: 10, marginBottom: 10 }}>
                                <Card title="Cardss title" bordered={false}>
                                    Card content
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores odio corporis temporibus
                                </Card>
                            </Space>
                        </Col>
                        <Col span={8}>
                            <Card style={{ marginBottom: 10 }} bordered={false}>
                                <Flex gap={20} vertical>
                                    <Space style={{ justifyContent: "space-between" }} size="small">
                                        <div style={cardImageStyle}>
                                            <Image alt="" src={SeverIcon} />
                                        </div>
                                        <Flex vertical>
                                            <Text strong>Loads</Text>
                                            <Text style={cardTextStyle} type="secondary">
                                                online Participant
                                            </Text>
                                        </Flex>
                                        <Progress style={{ width: "135px" }} strokeColor={Color.PRIMARY_ORANGE} percent={50} showInfo={false} />
                                    </Space>
                                    <Space style={{ justifyContent: "space-between" }} size="small">
                                        <div style={cardImageContainerStyle}>
                                            <Image alt="" src={ServerRequestIcon} />
                                        </div>
                                        <Flex vertical>
                                            <Text strong>Request</Text>
                                            <Text style={cardTextStyle} type="secondary">
                                                online Participant
                                            </Text>
                                        </Flex >
                                        <Progress style={{ width: "135px" }} percent={50} showInfo={false} />
                                    </Space>
                                </Flex>
                            </Card>
                            <Card style={{ marginBottom: 10 }} title="S3 Buckets">
                                {Object.values(
                                    (response || []).reduce<Record<string, { bucketName: string; totalSizeBytes: number }>>(
                                        (buckets, item) => {
                                            const { bucketName, totalSizeBytes } = item;
                                            if (!buckets[bucketName]) {
                                                buckets[bucketName] = { bucketName, totalSizeBytes };
                                            } else {
                                                buckets[bucketName].totalSizeBytes += totalSizeBytes;
                                            }
                                            return buckets;
                                        },
                                        {}
                                    )
                                ).map((bucket) => (
                                    <Space style={{ display: "flex", justifyContent: "space-between" }} key={bucket.bucketName}>
                                        <Text strong>{bucket.bucketName}</Text>
                                        <Text type='secondary'>{bucket.totalSizeBytes} Bytes</Text>
                                    </Space>
                                ))}
                            </Card>


                            <Card style={{ background: "linear-gradient(#8F68FD, #420ADF)" }}>
                                <Flex align='center' justify='space-between'>
                                    <Progress strokeWidth={10} strokeColor={Color.BASIC_WHITE} trailColor='#8EBBFE' type="circle" size={"small"} percent={75} format={(percent) => (<Text style={{ color: Color.BASIC_WHITE }} strong>{percent}</Text>)} />
                                    <Text style={{ color: Color.BASIC_WHITE }} strong>Storage <br /> Usage</Text> <Text style={{ color: Color.BASIC_WHITE }} strong>|</Text>
                                    <Text style={{ color: Color.BASIC_WHITE }} strong>21,21,32,314 <br /> online users </Text>
                                </Flex>
                            </Card>
                            <Card title={<Flex align='center' justify='center'>
                                <Image alt='alertLogo' src={AlertFlesh} />
                                <Text style={{ color: Color.BASIC_WHITE }} strong>Phishing Alert</Text>
                            </Flex>} style={{ marginTop: 10, background: "linear-gradient(#DD0101, #995555)" }} bordered={false}>
                                <List
                                    dataSource={data.length > 1 ? data.slice(0, 2) : data}
                                    renderItem={(item, index) => (
                                        <List.Item key={index}>
                                            <List.Item.Meta
                                                title={<Text style={{ color: Color.BASIC_WHITE }}>"10:31:44 from Indonesia"</Text>}
                                                description={<Text style={{ color: Color.BASIC_WHITE }}>"Sobatserver"</Text>}
                                            />
                                            <Button onClick={() => route.push('/alerts')} type='text'><ArrowRightOutlined style={{ color: Color.BASIC_WHITE }} /></Button>
                                        </List.Item>
                                    )}
                                />
                                {data.length > 1 && <Button size='small' onClick={() => route.push('/alerts')} style={{ color: Color.BASIC_WHITE }} type='text'>+more <ArrowRightOutlined /></Button>}
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div style={{ ...divStyle, marginBottom: 10 }}>
                    <Row wrap gutter={16}>
                        <Col span={24}>
                            <Card title="Cassrd title" bordered={false}>
                                Card content
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores odio corporis temporibus
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        </Layout >
    )
}

export default Dashboard