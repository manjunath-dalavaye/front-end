import React, { useState } from 'react';
import { Button, Input, Form, Alert } from 'antd';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../features/authSlice';

interface FormValues {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const onFinish = (values: FormValues) => {
    const { username, password } = values;
    setLoading(true);

    setTimeout(() => {
      dispatch(login({ username, password }));
      setLoading(false);
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <Alert message={error} type="error" />}
      <Form form={form} onFinish={onFinish}>
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: 'Please enter your username!' }]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: 'Please enter your password!' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
