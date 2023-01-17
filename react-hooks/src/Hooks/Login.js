import React, { useContext } from 'react'
import { userContext } from './UseContext';

export const Login = () => {
    const {setUserName} = useContext(userContext);
  return (
    <div>
        <input type="text" onChange={(e)=>setUserName(e.target.value)} />
    </div>
  )
}
