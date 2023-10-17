import { createSlice, createAsyncThunk, createAction, PayloadAction} from "@reduxjs/toolkit"
import categoryService from "./productsService"
import productsService from "./productsService"
import { IProduct } from "../../../interface/interface"

interface IProducts{
    products:IProduct[]
    loading:boolean
}

const initState:IProducts = {
    products: [],
    loading:false
}

export const getGetProducts:any = createAsyncThunk("products/get",async(data:any,thunkAPI)  =>{
    try{
        return await productsService.apiGetProducts();
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})

export const productsSlice = createSlice({
    name:"products",
    initialState:initState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(getGetProducts.fulfilled,(state:IProducts,action:PayloadAction<any>)=>{
            state.products= action.payload.data
            state.loading = false;
        })
        .addCase(getGetProducts.pending,(state:IProducts,action:PayloadAction<any>)=>{
            state.loading = true;
        })
    },
})


export default productsSlice.reducer;