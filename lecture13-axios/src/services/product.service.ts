import Product from '../types/product.type';
import http from './axios';

export const getAll = () => {
    return http.get('/products');
}

export const post = (product: Product) => {
    return http.post('/products', product);
}