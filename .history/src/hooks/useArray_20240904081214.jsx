// This is a React problem from BFE.dev

import React, { useState } from 'react'

export function useArray(array){
  const [state, setState] = useState(array)
  return {
    push: (item) => {
        setState(state.push(item));
        return state;
    },
    get value() {
        return state;
    },
    removeByIndex: (index) => {
        console.log(index);
        state.splice(index,1);
        console.log(state)
        return state;
    }
  }
}