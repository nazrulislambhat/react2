import { useReducer } from 'react';
const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'I':
      return { count: state.count + 1 };
    case 'D':
      return { count: state.count - 1 };
    case 'R':
      return { count: 0 };
    default:
      throw new Error();
  }
};
function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      UseReducer
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'I' })}>I</button>
      <button onClick={() => dispatch({ type: 'D' })}>D</button>
      <button onClick={() => dispatch({ type: 'R' })}>R</button>
    </div>
  );
}

export default UseReducer;
