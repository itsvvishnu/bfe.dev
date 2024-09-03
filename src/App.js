import { useState } from 'react';
import './App.css';
import useTimeout from './hooks/useTimeout';

function App() {
  const callback1 = () => {
    console.log("callback1");
  }
  const callback2 = () => {
    console.log("callback2");
  }
  const [callback, setCallback] = useState(callback1);
  const [delay, setDelay] = useState(4000);
  useTimeout(callback, delay);
  setTimeout(() =>{
    console.log("delay changed")
    setDelay(2000)
  }, 200);
  setTimeout(() =>{
    console.log("callback changed")
    setCallback(callback2)
  }, 300);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
