// This is a React problem from BFE.dev

import React, { useEffect, useState } from 'react'

export function useArray(array){
  const [state,setState] = useState(array)
  const [updatedState, setUpdatedState] = useState(array);
  useEffect( () => {
    console.log(state,"from useEffect")
    setUpdatedState(state);
  },[state])
  return {
    push: (...item) => {
        item.forEach( i => {
            state.push(i);
        });
        console.log(state);
        return state;
    },
    value:updatedState,
    removeByIndex: (index) => {
        state.splice(index,1);
        console.log(state)
        return state;
    }
  }
}