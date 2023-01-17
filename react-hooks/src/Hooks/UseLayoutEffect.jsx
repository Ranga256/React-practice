import React from 'react'
import { useLayoutEffect, useEffect, useRef } from 'react'

export default function UseLayoutEffect() {
    const inputRef = useRef(null);

    useLayoutEffect(()=>{
        console.log(inputRef.current.value);
    },[]);

    useEffect(()=>{
        inputRef.current.value = "Changed Value";
    },[]);

  
    return (
      <div>
        <p>UseLayoutEffect Hook</p>
        <input type="text" placeholder="Ex.." ref={inputRef} />
      </div>
    )
}
