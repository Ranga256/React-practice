import React, { useState, forwardRef, useImperativeHandle } from 'react'

const Button = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false);

    useImperativeHandle(ref, ()=>({
      alterToggle() {
        setToggle(!toggle)
      },
    }));
  return (
    <>
        <button>Button from Child</button>
        {toggle && <p>Shown text</p>}
    </>
  )

});

export default Button;
