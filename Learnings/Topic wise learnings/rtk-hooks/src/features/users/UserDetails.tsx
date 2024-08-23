// import React from 'react';
import { useLazyGetUserByIdQuery } from '../../api/userApi';

const UserDetails = () => {
  const [trigger, { data: user, isFetching, error }] = useLazyGetUserByIdQuery();

  if (isFetching) return <div>Loading...</div>;
  if (error) return <div>Error occurred</div>;
 const handleChange=()=>
 {
    trigger(3);
 }
  return (
    <div>
      <button onClick={handleChange}>Load User 2 Details</button>
      {user && (
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
