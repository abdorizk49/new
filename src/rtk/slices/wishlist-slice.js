import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
    initialState: [],
    name: 'wishlistSlice',
    reducers: {
        addToWishlist: (state, action) => {
            const findProduct = state.find((product) => product.id === action.payload.id)
            if(!findProduct){
                const productClone = {... action.payload, quantity: 1}
                state.push(productClone)
            }
        },
        deleteFromWishlist: (state, action) => {
            return state.filter((product) => product.id != action.payload.id )
        },
        clearWishlist: (state, action) => {
            return []
        }
    }
})


export const {addToWishlist, deleteFromWishlist, clearWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;