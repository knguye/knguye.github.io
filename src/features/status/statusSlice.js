import { createSlice } from "@reduxjs/toolkit";

export const statusSlice = createSlice({
    name: 'status',
    initialState: {
        loading: false,
        location: 'home',
    },
    reducers: {
        toggleLoading: (state, action) => {
            return {
                ...state,
                loading: action.payload,
            }
        },

        changeLocation: (state, action) => {
            return {
                ...state,
                location: action.payload,
            }
        } 
    }
})

export const {
    toggleLoading,
    changeLocation,
} = statusSlice.actions;

export default statusSlice.reducer;