import React, { useRef } from 'react'

export default function UseRef() {
  const inputRef = useRef(null);

  const change = ()=>{
    inputRef.current.focus();
  }

  return (
    <div>
      <p>UseRef Hook</p>
      <input type="text" placeholder="Ex.." ref={inputRef} />
      <button onClick={change}>Change name</button>
    </div>
  )
}
