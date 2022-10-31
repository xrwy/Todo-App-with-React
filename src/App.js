import React from 'react';
import AddUser from './components/AddUser';
//import User from './components/User';
import Users from './components/Users';
import { UpdateUser } from './components/UpdateUser';

function App() {
  return (
    <>
    <Users />
    <AddUser />
    <UpdateUser />
    </>
  );
}

export default App;
