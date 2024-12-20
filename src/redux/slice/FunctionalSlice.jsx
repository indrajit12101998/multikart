import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    searchModal: false,
    cartVisible: false,
}


export const FunctionalSlice = createSlice({
    name: 'functionalSlice',
    initialState,
    reducers: {
        toggleSearchModal: (state, action) => {
            state.searchModal = action.payload;
        },
        toggleCart: (state, action) => {
            state.cartVisible = action.payload;
        }
    },
})

export const { toggleSearchModal, toggleCart } = FunctionalSlice.actions;
export default FunctionalSlice.reducer;