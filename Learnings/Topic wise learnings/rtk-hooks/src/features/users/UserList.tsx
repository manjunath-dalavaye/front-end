// import React from 'react';
import { useGetUsersQuery, usePrefetch } from '../../api/userApi';

const UserList = () => {
  const { data: users, error, isLoading } = useGetUsersQuery();
  const prefetchUser = usePrefetch('getUserById');

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred</div>;

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users?.map((user) => (
          <li key={user.id}
              onMouseEnter={() => prefetchUser(user.id)}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
