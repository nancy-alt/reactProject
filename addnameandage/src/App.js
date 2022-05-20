import React, { useState } from 'react';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UsersList';

function App() {
  const [usersList, setUsersList]=useState([]);
  const addUserHandler =(uName, uAge) => {
    setUsersList((prevUsersList)=>{
      return [...prevUsersList,{name:uName, age:uAge, id:Math.random().toString()}];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList user={usersList}/> 
    </div>
  );
}

export default App;
