import Layout from '@/components/Layout';
import { ArrowUpOutlined, GlobalOutlined } from '@ant-design/icons';
import { Card, Col, Flex, Progress, Row, Space, Typography } from 'antd';
import { CSSProperties } from 'react';

const divStyle: CSSProperties = { paddingInline: 15, paddingTop: 10 }
const thumbIconStyle: CSSProperties = { fontSize: 40, color: '#0021F5', backgroundColor: '#C0E1FF', padding: 15, borderRadius: 15 }
function Dashboard() {

    const { Text, Title } = Typography

    return (
        <Layout>
            <div>
                <div style={divStyle}>
                    <Row gutter={16}>
                        <Col span={4}>
                            <Card bordered={false}>
                                <Flex vertical gap={3}>
                                    <Space size={"middle"}>
                                        <div style={thumbIconStyle} >
                                            <GlobalOutlined />
                                        </div>
                                    </Space>
                                    <Text>CPU</Text>
                                    <Text strong>10.08% <ArrowUpOutlined /></Text>
                                    <Text>Avg +65%</Text>
                                    <Progress percent={50} showInfo={false} />
                                </Flex>
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card bordered={false}>
                                <Flex vertical gap={3}>
                                    <Space size={"middle"}>
                                        <div style={{ ...thumbIconStyle, color: "#99BD0A", backgroundColor: "rgba(153, 189, 10, 0.3)" }} >
                                            <GlobalOutlined />
                                        </div>
                                    </Space>
                                    <Text>RAM</Text>
                                    <Text strong>10.08% <ArrowUpOutlined /></Text>
                                    <Text>Avg +65%</Text>
                                    <Progress percent={50} strokeColor='#99BD0A' showInfo={false} />
                                </Flex>
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card bordered={false}>
                                <Flex vertical gap={3}>
                                    <Space size={"middle"}>
                                        <div style={thumbIconStyle} >
                                            <GlobalOutlined />
                                        </div>
                                    </Space>
                                    <Text>DISK</Text>
                                    <Text strong>10.08% <ArrowUpOutlined /></Text>
                                    <Text>Avg +65%</Text>
                                    <Progress percent={50} showInfo={false} />
                                </Flex>
                            </Card>
                        </Col>
                        <Col span={4}>
                            <Card bordered={false}>
                                <Flex vertical gap={3}>
                                    <Space size={"middle"}>
                                        <div style={{ ...thumbIconStyle, color: "#FF0046", backgroundColor: "#FFDADA" }} >
                                            <GlobalOutlined />
                                        </div>
                                    </Space>
                                    <Text>SERVICES</Text>
                                    <Text strong>10.08% <ArrowUpOutlined /></Text>
                                    <Text>Avg +65%</Text>
                                    <Progress percent={50} strokeColor={"#FF0046"} showInfo={false} />
                                </Flex>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Card title" bordered={false}>
                                Card content
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores odio corporis temporibus
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div style={divStyle}>
                    <Row gutter={16}>
                        <Col span={16}>
                            <Card title="Card title" bordered={false}>
                                Card content
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores odio corporis temporibus
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title="Card title" bordered={false}>
                                Card content
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores odio corporis temporibus
                            </Card>
                        </Col>
                    </Row>
                </div>
                <div style={{ paddingInline: 25, paddingTop: 10, paddingBottom: 10 }}>
                    <Row gutter={16}>
                        <Card title="Card title" bordered={false}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam provident dolores, minima illo omnis consequuntur nobis cupiditate, praesentium, temporibus totam et alias at ratione nam quidem voluptatem similique unde accusantium.
                        </Card>
                    </Row>
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard