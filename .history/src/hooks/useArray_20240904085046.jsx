// This is a React problem from BFE.dev

import React, { useCallback, useEffect, useMemo, useState } from 'react'

export function useArray(array){
  const [value,setValue] = useState(array)
  const push = useCallback( (...item) => {
        item.forEach( i => {
            value.push(i);
        });
        console.log(value);
        return value;
  },[])
  const removeByIndex = (index) => {
    value.splice(index,1);
    console.log(value)
    return value;
}

  return useMemo( () => {
    return {
        push,
        value,
        removeByIndex
      }
  },[value,push,removeByIndex])
}