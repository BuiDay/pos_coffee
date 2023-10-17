import { NextFunction, Request, Response } from "express";
import { CatchAsyncError } from "../utils/catchAsyncErrors";
import ErrorHandler from "../utils/errorHandler";
import { IProduct } from "./interface.controller";
import { createProductService, getAllProductsByCategoryService, getAllProductsService } from "../services/product.service";

export const getAllProducts = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            await getAllProductsService(res)
        } catch (error) {
            console.log(error);
            return next(new ErrorHandler(error.message, 400));
        }
    }
);

export const getAllProductsByCategory = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params
            await getAllProductsByCategoryService(id, res)
        } catch (error) {
            console.log(error);
            return next(new ErrorHandler(error.message, 400));
        }
    }
);

export const createProducts = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { name, price, category } = req.body as IProduct;
            if (!name || !price || !category) {
                return next(new ErrorHandler("Miss input create product", 400));
            }
            await createProductService(name, price, category, res);
        } catch (error) {
            return next(new ErrorHandler(error.message, 400));
        }
    }
);


