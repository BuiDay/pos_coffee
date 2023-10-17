import express from 'express';
import { isAuthenticated } from '../middleware/isAuth';
import { createBill, getAllBills } from '../controllers/bill.controller';

const router = express.Router();

router.post('/create-bill',createBill);

router.get('/get-all-bills',getAllBills);

export default router