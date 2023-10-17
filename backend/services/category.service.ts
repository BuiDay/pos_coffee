import categoryModel from "../models/category.model";
import { NextFunction, Request, Response } from "express";


export const getAllCategoryService = async (res: Response) => {
    const categories = await categoryModel.find();
    res.status(200).json({
        success: true,
        data: categories
    })
}

export const createCategoryService = async (name:string,res: Response) => {
    const category = await categoryModel.create({name});
    res.status(200).json({
        success: true,
        data: category
    })
}

