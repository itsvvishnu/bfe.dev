import { useEffect, useMemo, useState } from 'react';
import './App.css';
import useTimeout from './hooks/useTimeout';
import { useArray } from './hooks/useArray';

function App() {
  const { value,push, removeByIndex } = useArray([1, 2, 3]);
  useMemo(() => {
    console.log("useEffect ran")
    // removeByIndex(1)
  }, [])
  return ( <div>
        {value}
      </div>
  );
}

export default App;
