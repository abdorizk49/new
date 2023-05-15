import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchProducts =  createAsyncThunk('productsSlice/fetchProducts', async() => {
    const res = await fetch('https://raw.githubusercontent.com/abdorizk49/new/main/products.json')
    // const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    return data
})

export const productsSlice =  createSlice({
    initialState: [],
    name: 'productsSlice',
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return action.payload;
            console.log(action);
        })
    }
})

export const {addProduct} = productsSlice.actions;

export default productsSlice.reducer;