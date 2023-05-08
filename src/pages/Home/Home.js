import React from 'react'
import Banner from '../../components/Banner/Banner'
import './Home.css';

function Home() {
    const features = [
        {
            'icon': '',
            'title': 'Quality Assurance',
            'description': 'Every INDUS GERMAN product comes with an assurance of high quality and zero compromise in its production, performance, and safety.'
        },
        {
            'icon': '',
            'title': 'Private Labeling',
            'description': 'Undertake private labeling of various products and ensure a timely delivery of all orders.'
        },
        {
            'icon': '',
            'title': 'Quality Products',
            'description': 'Years of Experience, technology is the guide, quality is life, customer is the center, management is the guara.'
        },
        {
            'icon': '',
            'title': 'Highly Focused R&D',
            'description': 'R&D and our perseverance to achieve the highest standards have given us the leader status in all our businesses.'
        }
    ]
    return (
        <>
            <Banner />

            <section className='features section-pad'>
                <div className="container">
                    <div className="row">
                        <h1 className='section-title mb-5 text-center'>Features</h1>
                        {
                            features.map((feature, index) => {
                                return (
                                    <div key={index} className="col-md-6 col-lg-3">
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

            <section className='products'>
                <div className="container">

                </div>
            </section>
        </>
    )
}

export default Home