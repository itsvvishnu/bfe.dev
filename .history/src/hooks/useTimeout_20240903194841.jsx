import { useEffect } from "react";

export function useTimeout(callback, delay) {
  const timer = setTimeout( () => {
    callback && callback();
  }, delay);
  useEffect( () => {
    console.log("delay changed",delay);
    if(timer){
      console.log("reseting..")
      clearTimeout(timer);
    }
    return clearTimeout(timer)
  },[delay])
}
export default useTimeout;
  
  // if you want to try your code on the right panel
  // remember to export App() component like below
  
  // export function App() {
  //   return <div>your app</div>
  // }