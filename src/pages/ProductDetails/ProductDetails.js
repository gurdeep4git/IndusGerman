import React from 'react'
import { useLocation } from "react-router-dom";
import { CategoriesData } from '../../data/categories-data';
import './ProductDetails.css';
import PageBanner from '../../components/PageBanner/PageBanner';
import parse from 'html-react-parser';
import SideMenu from '../../components/SideMenu/SideMenu';
import { ProductsNavData } from "../../data/products";

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
                                    <img src={product?.imageURL} alt={product?.title} className='img-fluid my-3' />
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
                            {subProductsNav.length > 0 && <SideMenu />}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetails