import React, { useCallback, useEffect, useMemo, useState } from "react";

export function useIsFirstRender() {
    const firstRender = React.useRef(true);
    if(firstRender.current){
        firstRender.current = false;
        return true;
    }
    return false;
}