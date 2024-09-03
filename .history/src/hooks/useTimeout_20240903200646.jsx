import { useEffect, useState } from "react";

export function useTimeout(callback, delay) {
  const [cb, setCb] = useState(null);
  setCb(callback);
  useEffect( () => {
    const timer = setTimeout( cb, delay);    
    return clearTimeout(timer)
  },[delay])
}
export default useTimeout;
  
  // if you want to try your code on the right panel
  // remember to export App() component like below
  
  // export function App() {
  //   return <div>your app</div>
  // }