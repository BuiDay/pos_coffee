import productModel from "../models/product.model";
import { NextFunction, Request, Response } from "express";

export const getAllProductsService = async (res: Response) => {
    const products = await productModel.find().populate("category", "name").exec();
    res.status(200).json({
        success: true,
        data: products
    })
}

export const getAllProductsByCategoryService = async (categoryId: string, res: Response) => {
    const products = await productModel.find({category:categoryId}).populate("category", "name").exec();
    res.status(200).json({
        success: true,
        data: products
    })
}

export const createProductService = async (name: string, price: number, category: string, res: Response) => {
    const product = await productModel.create({ name, price, category });
    res.status(200).json({
        success: true,
        data: product
    })
}

