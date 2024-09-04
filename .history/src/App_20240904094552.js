import { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';
import useTimeout from './hooks/useTimeout';
import { useArray } from './hooks/useArray';
import { useIsFirstRender } from './hooks/useIsFirstRender';

function App() {
  const { value,push, removeByIndex } = useArray([1, 2, 3]);
  useEffect(() => {
    console.log("useEffect ran")
    removeByIndex(1)
  }, [])
  useIsFirstRender();
  useIsFirstRender();
  useIsFirstRender();
  useIsFirstRender();

  return ( <div>
        {value}
      </div>
  );
}

export default App;
