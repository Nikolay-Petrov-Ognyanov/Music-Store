import { createSlice } from "@reduxjs/toolkit"

const viewportWidthSlice = createSlice({
    name: "viewportWidth",
    initialState: {
        value: window.innerWidth
    },
    reducers: {
        setViewportWidth: (state, { payload }) => {
            state.value = payload
        }
    }
})

export const { setViewportWidth } = viewportWidthSlice.actions
export default viewportWidthSlice.reducer

export function attachResizeListener(store) {
    window.addEventListener("resize", () => {
        const newViewportWidth = window.innerWidth
        store.dispatch(setViewportWidth(newViewportWidth))
    })
}