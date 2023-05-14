import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    initialState: [],
    name: 'cartSlice',
    reducers: {
        addToCart: (state, action) => {
            const findProduct = state.find((product) => product.id === action.payload.id)
            if(findProduct){
                // findProduct.quantity += 1;
            }
            else{
                const productClone = {... action.payload, quantity: 1}
                state.push(productClone)
            }
        },
        deleteFromCart: (state, action) => {
            return state.filter((product) => product.id != action.payload.id )
        },
        clear: (state, action) => {
            return []
        },
        plusQuantity: (state, action) => {
            const findProduct = state.find((product) => product.id === action.payload.id)
            if(findProduct){
                findProduct.quantity += 1;
            }
        },
        minusQuantity: (state, action) => {
            const findProduct = state.find((product) => product.id === action.payload.id)
            if(findProduct){
                if(findProduct.quantity == 1){
                }
                else{
                    findProduct.quantity -= 1;
                }
            }
        }
    }
})


export const {addToCart, deleteFromCart, clear, plusQuantity, minusQuantity} = cartSlice.actions;
export default cartSlice.reducer;