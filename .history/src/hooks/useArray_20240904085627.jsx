// This is a React problem from BFE.dev

import React, { useCallback, useEffect, useMemo, useState } from 'react'

export function useArray(array){
  const [value,setValue] = useState(array)
  const push = useCallback( (item) => {
       setValue( prev => setValue([...prev,item]))
  },[])
  const removeByIndex = useCallback((index) => {
    value.splice(index,1);
    console.log(value)
    return value;
},[])

return useMemo(() => ({ value, push, removeByIndex }), [value, push, removeByIndex]);
}