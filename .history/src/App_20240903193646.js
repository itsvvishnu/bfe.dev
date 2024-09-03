import { useState } from 'react';
import './App.css';
import useTimeout from './hooks/useTimeout';

function App() {
  const [callback, setCallback] = useState(callback1);
  const callback1 = () => {
    console.log("callback1");
  }
  const [delay, setDelay] = useState(100);
  setTimeout(() =>setDelay(400), 200);
  useTimeout(callback, delay);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
