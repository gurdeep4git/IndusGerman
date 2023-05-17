import React from 'react'
import { useLocation } from "react-router-dom";
import { ProductsData } from '../../data/products-data';
import { ProductsNavData } from "../../data/products";
import { Link } from 'react-router-dom';
import '../ProductDetails/ProductDetails.css';
import PageBanner from '../../components/PageBanner/PageBanner';

function SubProduct() {

    const parentKey = useLocation().pathname.split('/')[2];
    const key = useLocation().pathname.split('/')[3];
    const innerProduct = ProductsData.filter(i => i.key === key)[0];
    const subProductsNav = ProductsNavData.filter(s => s.key === parentKey)[0].subProducts;

    return (
        <>
            <PageBanner title={innerProduct?.parentTitle} />

            <section className='section-pad'>
                <div className="container">
                    <div className="row wow fadeInUp">
                        <div className="col-lg-8">
                            <div className='p-details'>
                                <h2 className='product-title'>{innerProduct?.title}</h2>

                                {innerProduct?.imageURL &&
                                    <img src={innerProduct?.imageURL} alt={innerProduct?.title} className='img-fluid' />
                                }

                                {
                                    innerProduct?.description.map((desc, index) => {
                                        return (
                                            <p key={index} className='product-text'>{desc}</p>
                                        )
                                    })
                                }

                                {innerProduct?.specification.length > 0 &&
                                    <div>
                                        <h4>Features</h4>
                                        <ul className='product-specs'>
                                            {
                                                innerProduct?.specification.map((spec, index) => {
                                                    return (
                                                        <li key={index}>
                                                            {spec}
                                                        </li>
                                                    )
                                                })

                                            }
                                        </ul>
                                    </div>
                                }

                                {innerProduct?.technicalSpecifications.length > 0 &&
                                    <div>
                                        <h4>Technical Specifications</h4>
                                        <ul className='product-specs'>
                                            {
                                                innerProduct?.technicalSpecifications.map((spec, index) => {
                                                    return (
                                                        <li key={index}>
                                                            {spec}
                                                        </li>
                                                    )
                                                })

                                            }
                                        </ul>
                                    </div>
                                }
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

export default SubProduct