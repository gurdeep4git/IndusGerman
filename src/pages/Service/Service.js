import React from 'react'
import PageBanner from '../../components/PageBanner/PageBanner'
import { useLocation } from "react-router-dom";
import ServiceData from "../../data/services.json";
import './Service.css';
import parse from 'html-react-parser';

function Service() {
    const key = useLocation().pathname.split('/')[2];
    const service = ServiceData.filter(i => i.key === key)[0]
    return (
        <>
            <PageBanner title={service?.title}></PageBanner>

            <section className='section-pad'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className='product-title'>{service?.title}</h2>
                            <div className='service-content wow fadeInUp'>
                                <div className='mb-4'>
                                    {
                                        service?.description.map((desc, index) => {
                                            return (
                                                <p key={index}>{desc}</p>
                                            )
                                        })
                                    }
                                </div>

                                {
                                    service?.faq && service?.faq.map((f, index) => {
                                        return (
                                            <div key={index} className='mb-4'>
                                                <h3 className='question'>{f.question}</h3>
                                                {
                                                    f?.answers.map((ans, index) => {
                                                        return (
                                                            <p key={index}>{parse(ans)}</p>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Service