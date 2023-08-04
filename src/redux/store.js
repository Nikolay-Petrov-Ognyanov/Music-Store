import { configureStore } from "@reduxjs/toolkit"
import modal from "./features/modal"
import viewportWidth, { attachResizeListener } from "./features/viewportWidth"

const store = configureStore({
    reducer: {
        modal,
        viewportWidth
    }
})

attachResizeListener(store)

export default store