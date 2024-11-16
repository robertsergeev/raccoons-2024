import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    visible: false,
}

const ModalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setVisible(state, action) {
            state.visible = action.payload;
        }
    }
})


export const ModalReducer = ModalSlice.reducer;
const actions = ModalSlice.actions;
export const {setVisible} = actions;