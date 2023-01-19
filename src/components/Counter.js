import React, { useState } from 'react'

const Counter = () => {
    console.log("ffff")
    const [number, setNumber] = useState(0)
    const clickHandler = ()=>{
        setNumber((prev)=>prev+1)
        setNumber((prev)=>prev+1)
        setNumber((prev)=>prev+1) 
    }

    const resetHandler =()=>{
        setNumber(0)
    }
   
    return (
    <div>
        <label>{number}</label>
        <button onClick={clickHandler}>increment</button>
        <button onClick={resetHandler}>reset</button>
    </div>
  )
}

export default Counter