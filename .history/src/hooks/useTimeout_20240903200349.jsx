import { useCallback, useEffect } from "react";

export function useTimeout(callback, delay) {
  console.log("calling use timout")
  const timer = useCallback( setTimeout( () => {
    callback && callback();
  }, delay),[delay])
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