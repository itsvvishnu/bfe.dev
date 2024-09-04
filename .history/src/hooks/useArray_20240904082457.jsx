// This is a React problem from BFE.dev

import React, { useState } from 'react'

export function useArray(array){
  const [state] = useState(array)
  return {
    push: (...item) => {
        item.forEach( i => {
            state.push(i);
        });
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