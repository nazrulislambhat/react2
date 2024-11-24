'use client';
import UseState from './ components/UseState';
import UseReducer from './ components/UseReducer';

export default function Home() {
  return (
    <div>
      <h1 className="text-6xl">React JS 2.0</h1>
      <UseState />
      <UseReducer />
    </div>
  );
}
