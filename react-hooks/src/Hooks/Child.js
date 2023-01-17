import React, { useEffect } from 'react'

export const Child = ({returnedData}) => {
    useEffect(()=>{
        console.log("Called");
    },[returnedData])
  return (
    <div>{returnedData()}</div>
  )
}
