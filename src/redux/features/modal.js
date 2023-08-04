import { createSlice } from "@reduxjs/toolkit"

const modalSlice = createSlice({
    name: "modal",
    initialState: {
        value: {
            display: false,
            itemName: ""
        }
    },
    reducers: {
        showModal: (state, { payload }) => {
            state.value.display = true
            state.value.itemName = payload
        },
        hideModal: (state) => {
            state.value.display = false
            state.value.itemName = ""
        }
    }
})

export const { showModal, hideModal } = modalSlice.actions
export default modalSlice.reducer