import { createSlice } from "@reduxjs/toolkit"

const viewportWidthSlice = createSlice({
    name: "viewportWidth",
    initialState: { value: window.innerWidth },
    reducers:{
        setViewportWidth: (state, { payload }) => {
            state.value = payload
        }
    }
})

export const { setViewportWidth } = viewportWidthSlice.actions
export default viewportWidthSlice.reducer

export function attachResizeListener(store) {
    function resizeListener() {
        const newViewportWidth = window.innerWidth

        store.dispatch(setViewportWidth(newViewportWidth))
    }

    window.removeEventListener("resize", resizeListener)
    window.addEventListener("resize", resizeListener)
}