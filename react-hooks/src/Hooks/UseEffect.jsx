import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const UseEffect = () => {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments").then((results)=>{
            setData(results.data[0].email);
            console.log("Api called");
        })
    },[count])
  return (
    <div>
        <h2>Use Effect Example</h2>
        <p>{data}</p>
        <p>{count}</p>
        <button onClick={()=>{setCount(prev=>prev+1)}}>Increment</button>
    </div>
  )
}
