import { useEffect } from "react";

let latestCallback;

export function useTimeout(callback, delay) {
  latestCallback = callback;
  useEffect( () => {
    const timer = setTimeout( () => {
      latestCallback && latestCallback();
    }, delay);    
    return () => clearTimeout(timer)
  },[delay])
}
export default useTimeout;
  
  // if you want to try your code on the right panel
  // remember to export App() component like below
  
  // export function App() {
  //   return <div>your app</div>
  // }