import axios from 'axios';
import React, { useMemo, useState, useEffect } from 'react'


export const UseMemo = () => {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);
    
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments").then((results)=>{
            setData(results.data);
        })
    },[]);

    const findLongestName = (comments) => {
        if (!comments) return null;
    
        let longestName = "";
        for (let i = 0; i < comments.length; i++) {
          let currentName = comments[i].name;
          if (currentName.length > longestName.length) {
            longestName = currentName;
          }
        }
    
        console.log("THIS WAS COMPUTED");
    
        return longestName;
      };
    
      const getLongerName = useMemo(()=>findLongestName(data),[data])

  return (
    <div>
        <p>{getLongerName}</p>
        <button onClick={()=>setToggle(!toggle)}>toggle</button>
        <h2>{toggle && <p>Shown</p>}</h2>
    </div>
  )
}
