'use client';

import { useState, useEffect } from 'react';

import UseReducer from './ components/UseReducer';
import ContextExample from './ components/ContextExample';
import L1 from './ components/L1';
import { some } from './ components/SomeContext';
export default function App() {
  const username = 'nazrul';
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         'https://jsonplaceholder.typicode.com/posts'
  //       );
  //       const result = await response.json();
  //       setData(result);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error Fetching', error);
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []); //will run only once
  return (
    <div>
      <h1>Data Fetcher</h1>
      {/* <UseReducer />
      <ContextExample /> */}
      <some.Provider value={username}>
        <L1 />
      </some.Provider>
      {/* {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
      )} */}
    </div>
  );
}
