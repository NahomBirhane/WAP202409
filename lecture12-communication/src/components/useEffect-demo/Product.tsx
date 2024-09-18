import React, { ChangeEvent, useEffect, useState } from 'react'

export default function Product() {
    const [productId, setProductId] = useState('c1785942-b138-45af-81bf-a92e5aa7fcd4');
    const [product, setProduct] = useState({id:'', title: '', price: 0, description: ''});
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProductId(e.target.value);
    }

    const getProduct = async () => {
        console.log('inside getProduct');
        const response = await fetch(`http://localhost:3000/products/${productId}`);
        const data = await response.json();
        setProduct(data);
    }

    useEffect(() => {
        getProduct();
    }, [productId])


    return (
        <div>
            Input Product ID: <input type='text' value={productId} onChange={handleChange} />
            {product.id}, {product.title}, {product.price}
        </div>
    )
}
