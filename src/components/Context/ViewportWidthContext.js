import { createContext, useContext, useEffect, useState } from "react";

const ViewportWidthContext = createContext()

export function useViewportWidth() { return useContext(ViewportWidthContext) }

export function ViewportWidthProvider({ children }) {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth)

    function handleResize() { setViewportWidth(window.innerWidth) }

    useEffect(() => {
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return <ViewportWidthContext.Provider value={viewportWidth}>
        {children}
    </ViewportWidthContext.Provider>
}