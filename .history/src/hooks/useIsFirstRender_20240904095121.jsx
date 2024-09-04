import React, { useCallback, useEffect, useMemo, useState } from "react";

let firstRender = {
    firstRender: true
};

export function useIsFirstRender() {
    const [render, setRender] = useState(true);
    useMemo(() => {
        firstRender.firstRender = false;
        console.log(render)
    },[])
    return firstRender.firstRender;
}