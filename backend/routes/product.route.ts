import express from 'express';
import { isAuthenticated } from '../middleware/isAuth';
import { createProducts,getAllProducts, getAllProductsByCategory } from '../controllers/product.controller';
const router = express.Router();

router.post('/create-product',createProducts)

router.get('/get-all-products',getAllProducts)

router.get('/get-products-by-category/:id',getAllProductsByCategory)


export default router