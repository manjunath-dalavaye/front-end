import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';
import { logout } from '../features/authSlice';

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h2>Welcome, {user}</h2>
      <Button onClick={handleLogout} type="primary">Logout</Button>
    </div>
  );
};

export default Dashboard;
