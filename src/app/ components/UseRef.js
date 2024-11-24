import { useRef } from 'react';

function UseRef() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <h1 className="text-6xl">UseRef Example1</h1>
      <label>
        Some Input
        <input type="text" ref={inputRef} placeholder="enter some text"></input>
      </label>
      <button onClick={focusInput}>Focus</button>
    </div>
  );
}

export default UseRef;
