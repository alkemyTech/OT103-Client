import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Get } from "../../Services/publicApiService";



export const categorieSlice = createSlice({
    name: 'categories',
    initialState: {
        loading: false,
        error: false,
        data: [],
    },
    reducers:{}
})

export default categorieSlice.reducer

export const fetchCategories = createAsyncThunk("categories/fetchCategories", async () => {
    try {
        const response = await Get('categories')
        
    } catch (error) {
        console.log(error)
    }
})

