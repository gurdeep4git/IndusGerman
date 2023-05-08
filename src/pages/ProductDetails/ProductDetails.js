import React from 'react'
import { useLocation } from "react-router-dom";
import products from '../../data/products/products.json';

function ProductDetails() {

    const key = useLocation().pathname.split('/')[2];
    const product = products.filter(p => p.key === key)[0];

    return (
        <>
            <div>{product.title}</div>
            <img src={product.imageURL} alt='product' />
            <div>{product.description}</div>
        </>
    )
}

export default ProductDetails