import { some } from './SomeContext';

import { useContext } from 'react';

export default function L3() {
  const username = useContext(some);
  return <pre>{username} L3</pre>;
}
8;
