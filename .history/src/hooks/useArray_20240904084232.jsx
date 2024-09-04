// This is a React problem from BFE.dev

import React, { useEffect, useState } from 'react'

export function useArray(array){
  const [state,setState] = useState(array)
  const push = (...item) => {
    item.forEach( i => {
        state.push(i);
    });
    console.log(state);
    return state;
  }
  useEffect( () => {
    
  },[state])
  return {
    push,
    value:updatedState,
    removeByIndex: (index) => {
        state.splice(index,1);
        console.log(state)
        return state;
    }
  }
}