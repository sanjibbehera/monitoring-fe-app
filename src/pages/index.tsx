import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Card, Col, Flex, Form, Input, Row, message } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CSSProperties } from 'react';
import { userLogin } from './api/userLogin';
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

const BtnStyle: CSSProperties = {
  width: "100%",
}
const LinkStyle: CSSProperties = {
  float: "right", fontSize: 14
}



export default function Home() {
  const router = useRouter()
  const onFinish = async (values: any) => {
    console.log('Success:', values);

    const result = await userLogin(values)
    if (result.status === 200) {
      // window.location.href = "/home"
      message.success('Login Successfully', 200);
      router.push('/Home')
    } else {
      message.error(result?.data?.message, 200);
    }

  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <>
      <main className='App'>
        <Row justify={"center"} style={LoginStyle} align={"middle"}>
          <Col span={8}>
            <Flex justify={"center"} align={"middle"} vertical>
              <Card title="Login">
                <Form
                  name="basic"
                  labelCol={{ span: 8 }}
                  className="login-form"
                  style={{ maxWidth: 600 }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item<FieldType>
                    name="email"
                    rules={[{ required: true, type: "email", message: 'Please input your email!' }]}
                  >
                    <Input placeholder='email' prefix={<MailOutlined />} />
                  </Form.Item>

                  <Form.Item>
                    <Form.Item<FieldType>
                      name="password"
                      rules={[{ required: true, message: 'Please input your password!' }]}
                      style={{ marginBottom: 0 }}
                    >
                      <Input.Password placeholder='Password' prefix={<LockOutlined />} />
                    </Form.Item>
                    <Link style={LinkStyle} href="">
                      Forgot password ?
                    </Link>
                  </Form.Item>
                  <Flex justify='center'>
                    <Form.Item style={BtnStyle}>
                      <Button block type="primary" htmlType="submit">
                        Login
                      </Button>
                      Or <Link href={'/register'} >Register Now!</Link>
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
