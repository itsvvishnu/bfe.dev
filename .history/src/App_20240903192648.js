import './App.css';
import useTimeout from './hooks/useTimeout';

function App() {
  const callback = () => {
    console.log("callback");
  }
  useTimeout(callback, 500);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
