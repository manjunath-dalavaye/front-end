// src/components/UserList.tsx
import React from 'react';
import { useGetUsersQuery } from '../api/usersApi';

const UserList: React.FC = () => {
  const { data: users, error, isLoading } = useGetUsersQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {users?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
