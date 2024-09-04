// This is a React problem from BFE.dev

import React, { useEffect, useState } from 'react'

export function useArray(array){
  const [state] = useState(array)
  let updatedState = state;
  useEffect( () => {
    console.log(state,"from useEffect")
    updatedState = state;
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