import { useState } from 'react';
import './App.css';
import useTimeout from './hooks/useTimeout';

function App() {
  const callback = () => {
    console.log("callback");
  }
  const [delay, setDelay] = useState(100);
  useTimeout(callback, delay);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
