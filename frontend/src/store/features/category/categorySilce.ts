import { createSlice, createAsyncThunk, createAction, PayloadAction} from "@reduxjs/toolkit"
import categoryService from "./categoryService"

interface ICategory {
    name:string
    _id:string
}

interface ICategories{
    categories:ICategory[]
    loading:boolean
}

const initState:ICategories = {
    categories: [],
    loading:false
}

export const getCategories:any = createAsyncThunk("categories/get",async(data:any,thunkAPI)  =>{
    try{
        return await categoryService.apiGetCategory();
    }catch(err){
       return thunkAPI.rejectWithValue(err)
    }
})

export const postSlice = createSlice({
    name:"post",
    initialState:initState,
    reducers:{},
    extraReducers:(builder) =>{
        builder
        .addCase(getCategories.fulfilled,(state:ICategories,action:PayloadAction<any>)=>{
            state.categories= action.payload.data
            state.loading = false;
        })
        .addCase(getCategories.pending,(state:ICategories,action:PayloadAction<any>)=>{
            state.loading = true;
        })
    },
})


export default postSlice.reducer;