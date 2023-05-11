import React from 'react'
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import products from '../../data/products/products.json';
import subProductsNavData from "../../data/sub-products-navbar.json";
import './ProductDetails.css';

function ProductDetails() {

    const key = useLocation().pathname.split('/')[2];
    const product = products.filter(p => p.key === key)[0];
    const subProductsNav = subProductsNavData.filter(s => s.key === key)[0].subProducts;

    return (
        <>
            <div className='product-banner'>
                <div className='overlay'></div>
                <div className="container">
                    <div className='content'>
                        <h1>{product?.title}</h1>
                    </div>
                </div>
            </div>

            <section className='section-pad'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className='p-details'>
                                <h2 className='product-title'>{product?.title}</h2>
                                <p className='product-text'>{product?.description}</p>
                                <ul className='product-specs'>
                                    {
                                        product?.specification.map((spec, index) => {
                                            return (
                                                <li key={index}>
                                                    {spec}
                                                </li>
                                            )
                                        })

                                    }
                                </ul>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='sub-menu-container'>
                                <ul className='sub-menu'>
                                    {
                                        subProductsNav.map((nav, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link to={nav?.link}>{nav?.title}</Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetails