import React from 'react';
import UserList from './features/users/UserList';
import UserDetails from './features/users/UserDetails';
import AddUser from './features/users/AddUser';


const App: React.FC=()=>{
  return (
    <div>
      <UserList />
      <UserDetails />
      <AddUser />
    </div>
  );
}

export default App;
