import React, { useState } from 'react';
import { Button, Input, Form, Alert } from 'antd';
import { useDispatch } from 'react-redux';
import { register } from '../features/authSlice';
import { useHistory } from 'react-router-dom';

interface FormValues {
  username: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const onFinish = (values: FormValues) => {
    const { username, password, confirmPassword } = values;
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      const token = 'mock-token';
      dispatch(register({ username, token }));
      setLoading(false);
      history.push('/login');
    }, 1000);
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      {error && <Alert message={error} type="error" />}
      <Form form={form} onFinish={onFinish} layout="vertical">
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
        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          rules={[{ required: true, message: 'Please confirm your password!' }]}
        >
          <Input.Password placeholder="Confirm Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
