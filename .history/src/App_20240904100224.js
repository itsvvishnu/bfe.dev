import { useCallback, useEffect, useMemo, useState } from 'react';
import './App.css';
import useTimeout from './hooks/useTimeout';
import { useArray } from './hooks/useArray';
import { useIsFirstRender } from './hooks/useIsFirstRender';

function App() {
  console.log(useIsFirstRender());
  console.log(useIsFirstRender());
  console.log(useIsFirstRender());
  console.log(useIsFirstRender());
  return ( <div>
      </div>
  );
}

export default App;
