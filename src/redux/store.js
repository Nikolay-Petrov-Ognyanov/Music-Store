import { configureStore } from "@reduxjs/toolkit"
import viewportWidth, { attachResizeListener } from "./features/viewportWidth"

const store = configureStore({
    reducer: {
        viewportWidth
    }
})

attachResizeListener(store)

export default store