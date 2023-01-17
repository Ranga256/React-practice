import React,{ useRef } from 'react'
import Button from './Button'

export default function UseImperativeHandle() {
  const inputRef = useRef(null);
  return (
    <div>
        <button onClick={()=>inputRef.current.alterToggle()}>Button from Parent</button>
        <Button ref={inputRef} />
    </div>
  )
}
