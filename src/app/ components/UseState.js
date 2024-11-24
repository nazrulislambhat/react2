'use client';
import { useState } from 'react';

function UseState() {
  const [count, setCount] = useState(0);
  const handleInc = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const handleDec = () => {
    setCount((prevCount) => prevCount - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>useState Counter</h1>
      <div className="">
        <p className="text-8xl text-red-600 flex-1">{count}</p>
        <button onClick={handleInc}>+</button>
        <button onClick={handleDec}>-</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default UseState;
