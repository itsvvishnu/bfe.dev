import { useCallback, useEffect } from "react";

export function useTimeout(callback, delay) {
  useEffect( () => {
    const timer = setTimeout( callback, delay);    
    return clearTimeout(timer)
  },[delay])
}
export default useTimeout;
  
  // if you want to try your code on the right panel
  // remember to export App() component like below
  
  // export function App() {
  //   return <div>your app</div>
  // }