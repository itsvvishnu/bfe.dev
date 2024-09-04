// This is a React problem from BFE.dev

import React, { useEffect, useState } from 'react'

export function useArray(array){
  const [state] = useState(array)
  useEffect( () => {

  },[state])
  return {
    push: (...item) => {
        item.forEach( i => {
            state.push(i);
        });
        console.log(state);
        return state;
    },
    get value() {
        return state;
    },
    removeByIndex: (index) => {
        state.splice(index,1);
        console.log(state)
        return state;
    }
  }
}