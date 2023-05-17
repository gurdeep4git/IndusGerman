import React from 'react'
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import { CategoriesData } from '../../data/categories-data';
import { ProductsNavData } from "../../data/products";
import './ProductDetails.css';
import PageBanner from '../../components/PageBanner/PageBanner';
import parse from 'html-react-parser';

function ProductDetails() {

    const key = useLocation().pathname.split('/')[2];
    const product = CategoriesData.filter(p => p.key === key)[0];
    const subProductsNav = ProductsNavData.filter(s => s.key === key)[0].subProducts;

    return (
        <>
            <PageBanner title={product?.title} />

            <section className='section-pad'>
                <div className="container">
                    <div className="row wow fadeInUp">
                        <div className="col-lg-8">
                            <div className='p-details'>
                                <h2 className='product-title'>{product?.title}</h2>

                                {product?.imageURL &&
                                    <img src={product?.imageURL} alt={product?.title} className='img-fluid' />
                                }

                                {
                                    product?.description.map((desc, index) => {
                                        return (
                                            <p key={index} className='product-text'>{parse(desc)}</p>
                                        )
                                    })
                                }

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
                                                    <Link to={nav?.link}>
                                                        <i className="bi bi-chevron-right"></i>
                                                        {nav?.title}
                                                    </Link>
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