import React, { useState } from "react";

const Child = (props) => {

  const [number, setNumber] = useState(0);
  
  const inputChnageHandler = (e) => {
    setNumber(e.target.value);
  };

  const setNumberClickHandler =() =>
  {
    props.parentFunction(number)
  }

  return (
    <div>
      <input type="number" onChange={inputChnageHandler} />
      <button onClick={setNumberClickHandler} >set number</button>
    </div>
  );
};

export default Child;
