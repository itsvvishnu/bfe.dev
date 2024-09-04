import React, { useEffect, useState } from "react";

export function useIsFirstRender() {
    const [render, setRender] = useState(false);
    useEffect(() => {
        setRender(true);
    })
    return render;
}