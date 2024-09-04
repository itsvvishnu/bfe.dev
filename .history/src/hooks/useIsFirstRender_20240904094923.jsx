import React, { useCallback, useEffect, useState } from "react";

let firstRender = true;

export function useIsFirstRender() {
    const [render, setRender] = useState(true);
    useEffect(() => {
        firstRender = false;
        console.log(render)
    },[])
    return firstRender;
}