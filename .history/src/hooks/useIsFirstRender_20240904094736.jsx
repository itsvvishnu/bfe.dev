import React, { useEffect, useState } from "react";

export function useIsFirstRender() {
    const [render, setRender] = useState(true);
    useEffect(() => {
        setRender(false);
        console.log(render)
    })
    return render;
}