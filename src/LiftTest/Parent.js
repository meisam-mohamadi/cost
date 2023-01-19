import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [number, setNumber] = useState(0);

  const func = (newNumber) => {
    setNumber(newNumber);
    
  };

  return (
    <div>
      <div>{number}</div>
      <Child parentFunction={func}/>
    </div>
  );
};

export default Parent;
