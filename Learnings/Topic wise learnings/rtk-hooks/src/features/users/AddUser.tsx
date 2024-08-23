import { useState } from 'react';
import { useAddUserMutation, useGetUsersQuery } from '../../api/userApi';

const AddUser = () => {
  const [addUser, { isLoading, error }] = useAddUserMutation();
  const { data: users, refetch } = useGetUsersQuery(); // Fetch the users list
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async () => {
    try {
      await addUser({ name, email }).unwrap();
      setName('');
      setEmail('');
      refetch(); // Refetch the users list after adding a new user
    } catch (err) {
      console.error('Failed to save the user: ', err);
    }
  };

  return (
    <div>
      <h2>Add User</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? 'Saving...' : 'Save'}
      </button>
      {error && <div>Error occurred</div>}
      
      <h2>User List</h2>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddUser;
