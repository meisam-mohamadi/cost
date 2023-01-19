import React, { useState } from "react";

const AddNewItem = () => {
  // const [type, setType] = useState('')
  // const [amount, setAmount] = useState(0)

  const [inputData, setInputData] = useState({ type: "", amount: 0 });

  const costTypeChangeHandler = (sender) => {
    // setType(sender.target.value)
    setInputData((prev) => {
      return { ...prev, type: sender.target.value };
    });
  };

  const costAmountChangeHandler = (sender) => {
    setInputData({ ...inputData, amount: sender.target.value });
  };

  const onClickHandler = (sender) => {
    sender.preventDefault();

    console.log(inputData);
    setInputData({ type: "", amount: 0 })
  };

  return (
    <form>
      <div>
        <label>cost type</label>
        <input type="text" value={inputData.type} onChange={costTypeChangeHandler} />
      </div>

      <div>
        <label>cost amount</label>
        <input type="number" value={inputData.amount} onChange={costAmountChangeHandler} />
      </div>

      <button onClick={onClickHandler}>ADD</button>
    </form>
  );
};

export default AddNewItem;
