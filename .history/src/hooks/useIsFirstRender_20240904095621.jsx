import React, { useCallback, useEffect, useMemo, useState } from "react";

export function useIsFirstRender() {
    const firstRender = React.useRef(true);
    useMemo(() => {
        firstRender.firstRender = false;
        console.log(render)
    },[])
    return firstRender.firstRender;
}