import billModel from "../models/bill.model";
import { NextFunction, Request, Response } from "express";
import productModel from "../models/product.model";

interface IItemBill {
    product: string,
    quantity: number,
}

export const getAllBillsService = async (res: Response) => {
    const bills = await billModel.find().populate({ path: 'items', populate: { path: 'product' } });
    const total_revenue =  bills.reduce((accumulator:any, currentValue)=>currentValue.total_amount + accumulator ,0)
    res.status(200).json({
        success: true,
        data: {total_revenue,bills}
    })
}

export const createBillService = async (items: [IItemBill], res: Response) => {
    const date = new Date();
    const month = `${date.getMonth() + 1}/${date.getFullYear()}`;
    let total_amount: number = 0;
    for (let i = 0; i < items.length; i++) {
        const productId = items[i].product;
        let getPrice = await productModel.findById(productId).select("price").exec();
        total_amount = total_amount + Number(getPrice.price) * items[i].quantity
    }
    const bill = await billModel.create({
        date,
        month,
        total_amount,
        items
    });
    res.status(200).json({
        success: true,
        data: bill
    })
}

