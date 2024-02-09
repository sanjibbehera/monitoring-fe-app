import { CustomCard } from '@/components/CustomCard';
import Layout from '@/components/Layout';
import { Color } from '@/utils/color';
import { ArrowRightOutlined, GlobalOutlined } from '@ant-design/icons';
import { Button, Card, Col, Flex, List, Progress, Row, Space, Typography } from 'antd';
import Image from 'next/image';
import { CSSProperties } from 'react';
import SeverIcon from '../../public/Server.svg';
import AlertFlesh from '../../public/alertPhishing.svg';
import ServerRequestIcon from '../../public/serverRequest.svg';
const divStyle: CSSProperties = { paddingInline: 15, paddingTop: 10 }


const cardContainerStyle = {
    padding: 15,
    borderRadius: 10,
};

const cardImageStyle = {
    ...cardContainerStyle,
    backgroundColor: "rgba(153, 189, 10, 0.4)",
};

const cardImageContainerStyle = {
    ...cardContainerStyle,
    backgroundColor: "rgba(174, 178, 255, 0.47)",
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

    const { Text, Title } = Typography

    return (
        <Layout>
            <div>
                <div style={divStyle}>
                    <Row gutter={16}>
                        <Col span={16}>
                            <Flex justify='space-evenly' align='center' >
                                <CustomCard
                                    title="CPU"
                                    color="#0021F5"
                                    titleIcon={<GlobalOutlined />}
                                    average={65}
                                    percentage={10.08}
                                    progressProps={{ percent: 50 }}
                                    bgColor='#C0E1FF'
                                />
                                <CustomCard
                                    title="CPU"
                                    color="#99BD0A"
                                    titleIcon={<GlobalOutlined />}
                                    average={65}
                                    percentage={10.08}
                                    progressProps={{ percent: 50, strokeColor: '#99BD0A' }}
                                    bgColor='rgba(153, 189, 10, 0.3)'
                                />
                                <CustomCard
                                    title="CPU"
                                    color="#0021F5"
                                    titleIcon={<GlobalOutlined />}
                                    average={65}
                                    percentage={10.08}
                                    progressProps={{ percent: 50 }}
                                    bgColor='#C0E1FF'
                                />
                                <CustomCard
                                    title="CPU"
                                    color="#FF0046"
                                    titleIcon={<GlobalOutlined />}
                                    average={65}
                                    percentage={10.08}
                                    progressProps={{ percent: 50, strokeColor: '#FF0046' }}
                                    bgColor='#FFDADA'
                                />
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
                                        <Progress style={{ width: "135px" }} strokeColor={"#99BD0A"} percent={50} showInfo={false} />
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
                                        </Flex>
                                        <Progress style={{ width: "135px" }} percent={50} showInfo={false} />
                                    </Space>
                                </Flex>
                            </Card>
                            <Card style={{ background: "linear-gradient(#8F68FD, #420ADF)" }}>
                                <Flex align='center' justify='space-between'>
                                    <Progress strokeWidth={10} strokeColor={Color.BASIC_WHITE} trailColor='#8EBBFE' type="circle" size={"small"} percent={75} format={(percent) => <Text style={{ color: Color.BASIC_WHITE }} strong>{percent}</Text>} />
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
                                        <>
                                            <List.Item key={index}>
                                                <List.Item.Meta
                                                    title={<Text style={{ color: Color.BASIC_WHITE }}>"10:31:44 from Indonesia"</Text>}
                                                    description={<Text style={{ color: Color.BASIC_WHITE }}>"Sobatserver"</Text>}
                                                />
                                                <Button type='text'><ArrowRightOutlined style={{ color: Color.BASIC_WHITE }} /></Button>
                                            </List.Item>
                                        </>
                                    )}
                                />
                                {data.length > 1 && <Button type='text'>+more <ArrowRightOutlined /></Button>}
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