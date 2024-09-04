// This is a React problem from BFE.dev

import React, { useState } from 'react'

export function useArray(array){
  const state = useState(array)
  return {
    push: (item) => {
        state.push(item);
        return state;
    },
    get value() {
        return state;
    },
    removeByIndex: (index) => {
        state.splice(index);
        return state;
    }
  }
}