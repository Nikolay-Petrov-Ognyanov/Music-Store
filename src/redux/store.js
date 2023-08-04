import { configureStore } from "@reduxjs/toolkit"
import modal from "./features/modal"
import width, { attachResizeListener } from "./features/width"

const store = configureStore({
    reducer: {
        modal,
        width
    }
})

attachResizeListener(store)

export default store