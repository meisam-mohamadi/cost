import React, { useState } from 'react'
import './Cost.css'
import CostAmount from './CostAmount'

const Cost = (props) => {

//let newAmount = props.arg.amount
const [newAmount, setNewAmount] = useState(props.arg.amount)

const clickHandler =()=>{
  setNewAmount(newAmount+10)
}
console.log("man ejra shodam")

  return (
    <div className='cost-main-container'>
      <div className='cost-type'>{props.arg.type}</div>
      <CostAmount amount={newAmount} />
      <button onClick={clickHandler}>edit</button>
    </div>
  )
}

export default Cost