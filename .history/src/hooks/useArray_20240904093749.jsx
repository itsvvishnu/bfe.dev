// This is a React problem from BFE.dev

import React, { useCallback, useEffect, useMemo, useState } from 'react'

export function useArray(array){
    const [value, setValue] = React.useState(array);
    const push = (item) => {
      setValue(prevValue => {
        return [...prevValue, item];
      })
    };
    const removeByIndex = React.useCallback((index) => {
      setValue(prevValue => {
        const newValue = [...prevValue];
        newValue.splice(index, 1);
        return newValue;
      });
    }, [])
    return {value, push, removeByIndex};
}