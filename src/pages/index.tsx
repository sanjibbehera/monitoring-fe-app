import { RootState } from '@/store/reducers/rootReducers';
import { setUser } from '@/store/slices/userSlices';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Card, Col, Flex, Form, Input, Row, message } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CSSProperties, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { redirectIfAuthenticated } from '../utils/auth';
import { isAuthenticated } from '../utils/auth';
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



export default function Login() {
  const router = useRouter()

  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    // If user is already authenticated, redirect to Dashboard
    const token = typeof window !== 'undefined' && localStorage.getItem('token') || ''
    if (isAuthenticated(user) || token !== '') {
      router.replace('/dashboard');
    } else {
      console.log('Empty');
    }
  }, [user, router]);

  const dispatch = useDispatch();
  const onFinish = async (values: any) => {
    const result = await userLogin(values)
    if (result.status === 200) {
      dispatch(setUser(result.data));
      localStorage.setItem('token', result?.data?.tokens?.access?.token)
      message.success('Login Successfully');
      router.push('/dashboard')
    } else {
      message.error(result?.data?.message);
    }

  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const [messageApi, contextHolder] = message.useMessage();


  return (
    <>
      {contextHolder}
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

