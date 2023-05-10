import React from 'react'
import Banner from '../../components/Banner/Banner'
import './Home.css';
import products from '../../data/navbar.json'
import data from '../../data/home.json';
import { Link } from 'react-router-dom';

function Home() {

    const productsList = products.filter(i => i.title === 'Products')[0].subMenu;

    return (
        <>
            <Banner />

            <section className='section-pad'>
                <div className="container">
                    <div className="row">
                        <h1 className='section-title mb-5 text-center wow fadeInUp'>Features</h1>
                        {
                            data.features.map((feature, index) => {
                                return (
                                    <div key={index} className="col-md-6 col-lg-3 wow fadeInUp" data-wow-delay={`${index * 0.5}s`}>
                                        <div className="feature-item py-4 px-4 py-lg-5 px-lg-4 mb-3 mb-lg-0">
                                            <h4 className="mb-3 feature-title">{feature.title}</h4>
                                            <p className="mb-4 feature-description">{feature.description}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

            <section className='section-pad bg-color'>
                <div className="container">
                    <div className="row">
                        <h1 className='section-title mb-5 text-center wow fadeInUp'>Products</h1>
                        {
                            productsList.map((product, index) => {
                                return (
                                    <div key={index} className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                                        <div className="service-item py-4 px-4 py-lg-4 mb-3">
                                            <Link className="service-title" to={product.link}>
                                                {product.title}
                                            </Link>

                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </section>

            <section className='section-pad'>
                <div className="container">
                    <div className="row">
                        <h1 className='section-title mb-5 text-center'>About Us</h1>
                        <div className='col wow fadeInUp' data-wow-delay="0.5">
                            {
                                data.about.map((item, index) => {
                                    return (
                                        <p key={index} className='description'>{item}</p>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home