import { response } from 'express';
import Product from '../model/product-schema.mjs'
import router from '../routes/route.mjs';


export const  getProducts = async (request, response) =>{
    try {
        const products = await Product.find({});

        response.json(products)
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}

export const getProductById = async (request, response) => {
    try {
        const products = await Product.findOne({ 'id': request.params.id });
        response.json(products);
        
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}