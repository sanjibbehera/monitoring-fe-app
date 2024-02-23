
import { RootState } from '@/store/reducers/rootReducers';
import { isAuthenticated } from '@/utils/auth';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Col, Flex, Form, Input, Row, Select, Typography, message } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CSSProperties, useEffect } from 'react';
import { useSelector } from 'react-redux';
import AwsIcon from '../../public/aws.svg';
import { userRegister } from './api/userLogin';

type FieldType = {
    email?: string;
    password?: string;
    confirmPassword?: string;
    accountId?: string;
    role?: string;
    name: string;
    region?: string;
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
    fontSize: 14,
}



export default function Register() {
    const { Text } = Typography;
    const router = useRouter();
    const user = useSelector((state: RootState) => state.user);

    useEffect(() => {
        // If user is already authenticated, redirect to Dashboard
        const token = typeof window !== 'undefined' && localStorage.getItem('token') || ''
        if (isAuthenticated(user) || token !== '') {
            router.replace('/dashboard');
        }
    }, [user, router]);

    const onFinish = async (values: any) => {
        if (values.password !== values.confirmPassword) {
            message.error("Password does not match!", 200);
            return;
        }
        const result = await userRegister(values)
        if (result.status === 201) {
            message.success('Register Successfully, Please Go back to Login Page to Login!', 1000);
        } else {
            message.error(result?.data?.message, 1000);
        }

    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <main className='App'>
            <Row justify={"center"} style={LoginStyle} align={"middle"}>
                <Col span={8}>
                    <Flex justify={"center"} align={"middle"} vertical>
                        <Card title="Register Now!">
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
                                    name="name"
                                    rules={[{ required: true, message: 'Please input your Name!' }]}
                                >
                                    <Input placeholder='Name' prefix={<UserOutlined />} />
                                </Form.Item>

                                <Form.Item<FieldType>
                                    name="email"
                                    rules={[{ required: true, message: 'Please input your email!' }, { type: "email", message: "Invalid email" }]}
                                >
                                    <Input placeholder='email' prefix={<MailOutlined />} />
                                </Form.Item>

                                <Form.Item<FieldType>
                                    name="password"

                                    rules={[{ required: true, message: 'Please input your password!' }, { pattern: /^(?=.*[A-Za-z])(?=.*\d).{8,}$/, message: "Password must be at least 8 characters long contains atleast 1 alphabet and 1 number" }]}
                                    hasFeedback
                                >
                                    <Input.Password placeholder='Password' prefix={<LockOutlined />} />
                                </Form.Item>

                                <Form.Item<FieldType>
                                    name="confirmPassword"
                                    rules={[{ required: true, message: 'Please input your password Again!' },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('The new password that you entered do not match!'));
                                        },
                                    })]}
                                    dependencies={['password']}
                                >
                                    <Input.Password placeholder='Confirm Password' prefix={<LockOutlined />} />
                                </Form.Item>

                                <Form.Item<FieldType>
                                    name="accountId"
                                    rules={[{ required: true, message: 'Please input your AWS Account Id!' }]}

                                >
                                    <Input placeholder='AWS Account Id' prefix={<Image alt='awsLogo' width={20} src={AwsIcon} />} />
                                </Form.Item>
                                <Form.Item<FieldType>
                                    name="region"
                                    rules={[{ required: false, message: 'Select Region' }]}

                                >
                                    <Select placeholder="Select Region" options={[{ value: 'ap-south-1', label: <span>ap-south-1</span> }]} />
                                </Form.Item>

                                <Flex justify='center'>
                                    <Form.Item style={BtnStyle}>
                                        <Button block type="primary" htmlType="submit">
                                            Register!!
                                        </Button>
                                        <Text type={"secondary"} style={LinkStyle}>Or already have account</Text>
                                        <Link href={'/'} style={LinkStyle} > Login Here!</Link>
                                    </Form.Item>
                                </Flex>
                            </Form>
                        </Card>
                    </Flex>
                </Col>
            </Row>
        </main>
    )
}
