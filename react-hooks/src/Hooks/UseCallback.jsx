import React, {  useCallback, useState } from 'react'
import { Child } from './Child';

export const UseCallback = () => {
    const [data, setData] = useState("Adios, Amigos");
    const [toggle, setToggle] = useState(false);

    const returnedData = useCallback(()=>{
        return data;
    },[data]);
  return (
      <div>
        <button onClick={() => setToggle(!toggle)}>toggle</button>
        <h2>{toggle && <p>Shown</p>}</h2>
        <Child returnedData={returnedData} />
     </div>
  )
}
