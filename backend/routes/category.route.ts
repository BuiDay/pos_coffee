import express from 'express';
import { getAllCategory,createCategory } from '../controllers/category.controller';
import { isAuthenticated } from '../middleware/isAuth';
const router = express.Router();

router.post('/create-category',createCategory)

router.get('/get-all-category',getAllCategory)


export default router