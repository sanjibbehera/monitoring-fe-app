import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Card, Checkbox, Col, Flex, Form, Input, Row, Typography } from 'antd';
import Head from 'next/head';
import { CSSProperties } from 'react';
type FieldType = {
  email?: string;
  password?: string;
  remember?: string;
};


const LoginStyle: CSSProperties = {
  height: "100vh",
  backgroundColor: "#f0f2f5",
  borderRadius: "18px",
}



export default function Home() {
  const { Title, Text, Link } = Typography;

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <>
      <Head>
        <title>Monitoring App</title>
        <meta name="description" content="Monitoring App for Monitoring Data Flow, Server issues and Server related information" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='App'>
        <Row justify={"center"} style={LoginStyle} align={"middle"}>
          <Col span={8}>
            <Flex justify={"center"} align={"middle"} vertical>
              <Card title="Login">
                <Form
                  name="basic"
                  labelCol={{ span: 8 }}
                  className="login-form"
                  // wrapperCol={{ span: 16 }}
                  style={{ maxWidth: 600 }}
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item<FieldType>
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                  >
                    <Input placeholder='email' prefix={<MailOutlined />} />
                  </Form.Item>

                  <Form.Item<FieldType>
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                  >
                    <Input.Password placeholder='Password' prefix={<LockOutlined />} />
                  </Form.Item>

                  <Form.Item

                  >
                    <Form.Item<FieldType>
                      name="remember"
                      valuePropName="checked"
                      wrapperCol={{ offset: 0, span: 16 }}
                      noStyle
                    >
                      <Checkbox>Remember me</Checkbox>

                      <Link style={{ float: "right" }} href="">
                        Forgot password
                      </Link>
                    </Form.Item>
                  </Form.Item>


                  <Flex justify='center' >
                    <Form.Item >
                      <Button type="primary" htmlType="submit">
                        Login
                      </Button>
                    </Form.Item>
                  </Flex>
                </Form>
              </Card>
            </Flex>
          </Col>
        </Row>
      </main>
    </>
  )
}
