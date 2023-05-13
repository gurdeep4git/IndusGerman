import React from 'react'
import PageBanner from '../../components/PageBanner/PageBanner'
import AboutData from '../../data/about.json';
import './About.css';

function About() {

    return (
        <>
            <PageBanner title={AboutData.title} />

            <section className='section-pad'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className='product-title'>{AboutData?.title}</h2>
                            <div className='about-content wow fadeInUp'>
                                <div>
                                    {
                                        AboutData?.description.map((desc, index) => {
                                            return (
                                                <p key={index}>{desc}</p>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About