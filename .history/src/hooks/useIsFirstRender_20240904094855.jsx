import React, { useCallback, useEffect, useState } from "react";

let firstRender = true;

export function useIsFirstRender() {
    const [render, setRender] = useState(true);
    useCallback(() => {
        setRender(false);
        console.log(render)
    },[])
    return render;
}