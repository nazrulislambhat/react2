import { useRef, useState } from 'react';

function UseRef2() {
  const timerRef = useRef(null);
  const [count, setCount] = useState(0);

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 17);
      }, 1);
    }
  };
  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };
  return (
    <div>
      <h4>UseRef2</h4>
      <h1>{count}</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default UseRef2;
