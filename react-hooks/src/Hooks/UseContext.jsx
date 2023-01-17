import React, { createContext, useState } from 'react'
import { Login } from './Login';
import { User } from './User';

export const userContext = createContext(null);

export const UseContext = () => {
    const [userName, setUserName] = useState("");
  return (
    <userContext.Provider value={{userName, setUserName}}>
        <Login />
        <User />
    </userContext.Provider>
  )
}
