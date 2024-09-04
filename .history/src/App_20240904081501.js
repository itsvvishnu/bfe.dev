import { useState } from 'react';
import './App.css';
import useTimeout from './hooks/useTimeout';
import { useArray } from './hooks/useArray';

function App() {
  const { value,push, removeByIndex } = useArray([1, 2, 3]);
  push(8,4,4);
  removeByIndex(0);
  return ( <div>
        {value}
      </div>
  );
}

export default App;
