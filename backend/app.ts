require('dotenv').config();
import express, { NextFunction, Request, Response } from "express"
export const app = express();
import { Error } from "./middleware/error";
import cors from 'cors';
import cookieParser from "cookie-parser";
import categoryRouter from './routes/category.route'
import productRouter from './routes/product.route'
import billRouter from './routes/bill.route'

//body parse
app.use(express.json({ limit: "50mb" }));

app.use(cookieParser());

app.use(cors());

app.use('/api/v1/category', categoryRouter);
app.use('/api/v1/product', productRouter);
app.use('/api/v1/bill', billRouter);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.json({
        success: true
    })
})

app.use(Error)