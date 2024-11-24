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
        <button
          onClick={handleInc}
          className="px-8 bg-red-500 text-black text-4xl py-2 border-2 rounded border-black pointer flex-1"
        >
          +
        </button>
        <button
          onClick={handleDec}
          className="px-8 text-4xl bg-blue-500 py-2 border-2 rounded border-black pointer"
        >
          -
        </button>
        <button
          onClick={handleReset}
          className="px-8 text-4xl bg-green-500 py-2 border-2 rounded border-black pointer"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default UseState;
