import React, { useContext } from 'react'
import { userContext } from './UseContext';

export const User = () => {
    const {userName} = useContext(userContext);
  return (
    <div>Username - {userName}</div>
  )
}
