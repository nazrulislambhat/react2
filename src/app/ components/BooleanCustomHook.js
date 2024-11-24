import { useState } from 'react';

function BooleanCustomHook() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  return (
    <div>
      <h1>BooleanCustomHook</h1>
      <h1>{toggle.toString()}</h1>
      <button type="button" onClick={handleToggle}>
        Toggle
      </button>
    </div>
  );
}

export default BooleanCustomHook;
