import Layout from "@/components/Layout";
import { UserOutlined } from "@ant-design/icons";
import { Avatar, Card, Col, Row, Space, Typography } from "antd";
import { CSSProperties } from "react";


const divStyle: CSSProperties = { paddingInline: 15, paddingTop: 10 }
export default function AlertPage() {
    return (
        <Layout>
            <div>
                <div style={divStyle}>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Card>
                                <div style={{ marginBottom: 5 }}>
                                    <Space>
                                        <Avatar icon={<UserOutlined />} />
                                        <Space.Compact block direction="vertical" >
                                            <Typography.Text strong>Server Name</Typography.Text>
                                            <Typography.Text aria-level={2} type="secondary" >Indonesia - Sobatserver</Typography.Text>
                                        </Space.Compact>
                                    </Space>
                                </div>
                                <Row gutter={12}>
                                    <Col >
                                        <Space>
                                            <Card title="CPU Usage">
                                                asd
                                            </Card>
                                            <Card title="CPU Usage">
                                                asd
                                            </Card>
                                        </Space>
                                    </Col>
                                    <Col >
                                        <Space>
                                            <Card title="EC2">
                                                Graph Lorem ipsum,
                                            </Card>
                                            <Card title="EC2">
                                                Graph Lorem ipsum,
                                            </Card>
                                            <Card title="EC2">
                                                Graph Lorem ipsum,sadasdaw asdqwejhskhasklf
                                            </Card>
                                        </Space>
                                    </Col>
                                </Row><div style={{ margin: 10 }} />
                                <Row gutter={12}>
                                    <Col >
                                        <Space>
                                            <Card title="CPU Usage">
                                                asd
                                            </Card>
                                            <Card title="CPU Usage">
                                                asd
                                            </Card>
                                        </Space>
                                    </Col>
                                    <Col >
                                        <Space>
                                            <Card title="EC2">
                                                Graph Lorem ipsum,
                                            </Card>
                                            <Card title="EC2">
                                                Graph Lorem ipsum,
                                            </Card>
                                            <Card title="EC2">
                                                Graph Lorem ipsum,sadasdaw asdqwejhskhasklf
                                            </Card>
                                        </Space>
                                    </Col>
                                </Row><div style={{ margin: 10 }} />
                                <Row gutter={12}>
                                    <Col >
                                        <Space>
                                            <Card title="CPU Usage">
                                                asd
                                            </Card>
                                            <Card title="CPU Usage">
                                                asd
                                            </Card>
                                        </Space>
                                    </Col>
                                    <Col >
                                        <Space>
                                            <Card title="EC2">
                                                Graph Lorem ipsum,
                                            </Card>
                                            <Card title="EC2">
                                                Graph Lorem ipsum,
                                            </Card>
                                            <Card title="EC2">
                                                Graph Lorem ipsum,sadasdaw asdqwejhskhasklfss
                                            </Card>
                                        </Space>
                                    </Col>
                                </Row><div style={{ margin: 10 }} />
                                <Card>
                                    asds
                                </Card>
                            </Card>

                        </Col>
                    </Row>
                </div>
            </div>
        </Layout>
    )
}
