import mongoose, { Model, Schema,Document} from "mongoose";
import { IProduct } from "../controllers/interface.controller";
require('dotenv').config();

export interface IBill extends Document{
    date: Date,
    total_amount: Number,
    month: string,
    items: [
        product:string,
        quantity: Number,
    ],
}

const billSchema:Schema<IBill> = new mongoose.Schema({
    date:{
        type:Date,
    },
    total_amount:{
        type:Number,
    },
    month:{
        type:String,
    },
    items:[
        {
            product: {type: Schema.Types.ObjectId, ref: 'Product'},
            quantity: {type:Number}
        }
    ]
},{
    timestamps:true
})

const billModel: Model<IBill> = mongoose.model("Bill",billSchema);

export default billModel;