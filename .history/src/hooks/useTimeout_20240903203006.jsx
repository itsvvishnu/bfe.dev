import { useEffect, useState } from "react";

export function useTimeout(callback, delay) {
  console.log("use timeout called", callback, delay);
  useEffect( () => {
    const timer = setTimeout( () => {
      if(callback){
        callback();
      }
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