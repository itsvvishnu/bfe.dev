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
  const [delay, setDelay] = useState(1000);
  setTimeout(() =>{
    console.log("delay changed")
    setDelay(400)
  }, 200);
  setTimeout(() =>{
    console.log("callback changed")
    setCallback(callback2)
  }, 300);
  useTimeout(callback, delay);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
