import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };

    default:
      throw new Error('Unknown Action Type');
  }
};

function UseReducer() {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p className="text-8xl text-red-600 flex-1">{state.count}</p>
      <button
        onClick={() => dispatch({ type: 'increment' })}
        className="px-8 bg-red-500 text-black text-4xl py-2 border-2 rounded border-black pointer flex-1"
      >
        +
      </button>
      <button
        onClick={() => dispatch({ type: 'decrement' })}
        className="px-8 bg-blue-500 text-black text-4xl py-2 border-2 rounded border-black pointer flex-1"
      >
        -
      </button>
      <button
        onClick={() => dispatch({ type: 'reset' })}
        className="px-8 bg-green-500 text-black text-4xl py-2 border-2 rounded border-black pointer flex-1"
      >
        Reset
      </button>
    </div>
  );
}

export default UseReducer;
