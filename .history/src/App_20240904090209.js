import { useEffect, useState } from 'react';
import './App.css';
import useTimeout from './hooks/useTimeout';
import { useArray } from './hooks/useArray';

function App() {
  const { value,push, removeByIndex } = useArray([1, 2, 3]);
  const values = []
  // removeByIndex(0);
  useEffect(() => {
    push(2);
    removeByIndex(1)
  }, [])
  return ( <div>
        {value}
      </div>
  );
}

export default App;
