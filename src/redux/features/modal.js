import { createSlice } from "@reduxjs/toolkit"

const modalSlice = createSlice({
    name: "modal",
    initialState: { value: false },
    reducers: {
        showModal: (state) => {
            state.value = true
        },
        hideModal: (state) => {
            state.value = false
        }
    }
})

export const { showModal, hideModal } = modalSlice.actions
export default modalSlice.reducer