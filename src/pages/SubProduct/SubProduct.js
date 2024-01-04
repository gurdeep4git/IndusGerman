import React from 'react'
import { useLocation } from "react-router-dom";
import { ProductsData } from '../../data/products-data';
import '../ProductDetails/ProductDetails.css';
import PageBanner from '../../components/PageBanner/PageBanner';
import SideMenu from '../../components/SideMenu/SideMenu';

function SubProduct() {

    const key = useLocation().pathname.split('/')[3];
    const innerProduct = ProductsData.filter(i => i.key === key)[0];


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
                                    <img src={innerProduct?.imageURL} alt={innerProduct?.title} className='img-fluid my-3' />
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
                                        {innerProduct?.showTitle && <h4>Technical Specifications</h4>}
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
                            <SideMenu />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SubProduct