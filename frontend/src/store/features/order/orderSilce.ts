import { createSlice, createAsyncThunk, createAction, PayloadAction} from "@reduxjs/toolkit"
import categoryService from "./orderService"
import { IProduct } from "../../../interface/interface"

interface IBill {
    date: string,
    total_amount: Number,
    month: string,
    items: [
        {    
            product:IProduct,
            quantity: Number
        }
    ],
}

interface IOrder {
    table:number,
    order:IBill
}

const x = localStorage.getItem("orders") && JSON.parse(localStorage.getItem("orders") || "")
const initState:IOrder[] = x || [];

export const orderSlice = createSlice({
    name:"order",
    initialState:initState,
    reducers:{
        addOrder:(state,action)=>{
            const date = new Date(Date.now()).toISOString();
            let items
            if(state[action.payload.table - 1]?.order.items.length > 0){
                items = [...state[action.payload.table - 1]?.order.items,...action.payload.items]
            }else{
                items = action.payload.items
            }
            const total_amount = items.reduce((total:any,current:any)=>{
              return   total = total + current.product.price * current.quantity
            },0)
           
            const order:IOrder = {
                table:action.payload.table,
                order:{
                    date,
                    total_amount: total_amount,
                    month: "10/2023",
                    items:items
                }
            }
            const index = action.payload.table;
            state[index-1] = order
        }
    },
    extraReducers:(builder) =>{
        // builder
        // .addCase(getCategories.fulfilled,(state:IBill,action:PayloadAction<any>)=>{
        //     state.categories= action.payload.data
        //     state.loading = false;
        // })
        // .addCase(getCategories.pending,(state:IBill,action:PayloadAction<any>)=>{
        //     state.loading = true;
        // })
    },
})

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;