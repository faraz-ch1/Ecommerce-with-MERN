import express from 'express';
import { userLogin, userSignUp } from '../controller/user-controller.mjs';
import { getProducts, getProductById } from '../controller/product-controller.mjs'

const router = express.Router();

router.post('/signup', userSignUp);
router.post('/login', userLogin);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);

export default router;