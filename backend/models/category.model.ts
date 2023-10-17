import mongoose, { Model, Schema,Document} from "mongoose";
require('dotenv').config();

export interface ICategory extends Document{
    name:string;
}

const categorySchema:Schema<ICategory> = new mongoose.Schema({
    name:{
        type:String,
    },
},{
    timestamps:true
})

const mailModel: Model<ICategory> = mongoose.model("Category",categorySchema);

export default mailModel;