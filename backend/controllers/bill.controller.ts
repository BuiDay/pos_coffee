import { NextFunction, Request, Response } from "express";
import { CatchAsyncError } from "../utils/catchAsyncErrors";
import ErrorHandler from "../utils/errorHandler";
import { createBillService, getAllBillsService } from "../services/bill.service";


export const getAllBills = CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            await getAllBillsService(res)
        } catch (error) {
            console.log(error);
            return next(new ErrorHandler(error.message, 400));
        }
    }
);

// export const getAllProductsByCategory = CatchAsyncError(
//     async (req: Request, res: Response, next: NextFunction) => {
//         try {
//             const { id } = req.params
//             await getAllProductsByCategoryService(id, res)
//         } catch (error) {
//             console.log(error);
//             return next(new ErrorHandler(error.message, 400));
//         }
//     }
// );

export const createBill= CatchAsyncError(
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { items } = req.body
            if (!items) {
                return next(new ErrorHandler("Miss input create bill", 400));
            }
            await createBillService(items, res);
        } catch (error) {
            return next(new ErrorHandler(error.message, 400));
        }
    }
);


