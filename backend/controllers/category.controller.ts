import { NextFunction, Request, Response } from "express";
import { CatchAsyncError } from "../utils/catchAsyncErrors";
import ErrorHandler from "../utils/errorHandler";
import {createCategoryService, getAllCategoryService} from '../services/category.service'
import {ICategory } from "./interface.controller";

export const getAllCategory = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try { 
            getAllCategoryService(res)
        } catch (error) {
            console.log(error);
            return next(new ErrorHandler(error.message, 400));
        }
    }
);

export const createCategory = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { name } = req.body as ICategory;
            if(!name){
                return next(new ErrorHandler("Miss category name ", 400));
            }
            await createCategoryService(name, res);
        } catch (error) {
            return next(new ErrorHandler(error.message, 400));
        }
    }
);


