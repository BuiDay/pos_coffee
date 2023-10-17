import mongoose, { Model, Schema,Document} from "mongoose";
import { ICategory } from "./category.model";
require('dotenv').config();

export interface IProduct extends Document{
    name:string,
    price:number,
    category:any,
    quantity_in_stock:number
}

const productSchema:Schema<IProduct> = new mongoose.Schema({
    name:{
        type:String,
    },
    price:{
        type:Number,
    },
    category:{
        type:Schema.Types.ObjectId,
        ref: 'Category'
    },
    quantity_in_stock:{
        type:Number,
        default:0
    },

},{
    timestamps:true
})

const productModel: Model<IProduct> = mongoose.model("Product",productSchema);

export default productModel;