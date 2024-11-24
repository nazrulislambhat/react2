'use client';
import UseState from './ components/UseState';
import UseReducer from './ components/UseReducer';
import UseRef from './ components/UseRef';
import UseRef2 from './ components/UseRef2';
import BooleanCustomHook from './ components/BooleanCustomHook';
export default function Home() {
  return (
    <div>
      <h1 className="text-6xl">React JS 2.0</h1>
      <UseState />
      <UseReducer />
      <UseRef />
      <UseRef2 />
      <BooleanCustomHook />
    </div>
  );
}
