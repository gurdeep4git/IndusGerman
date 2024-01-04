import React from 'react'
import ClientsData from '../../data/clients.json';
import PageBanner from '../../components/PageBanner/PageBanner';
import parse from 'html-react-parser';

function Clients() {
    return (
        <>
            <PageBanner title={ClientsData.title} />

            <section className='section-pad'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className='product-title'>{ClientsData?.title}</h2>
                            <div className='about-content wow fadeInUp'>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <div>
                                            <ul className='mb-0'>
                                                {
                                                    ClientsData?.clients.map((item, index) => {
                                                        return (
                                                            <li style={{ margin: 0 }} key={index}>{parse(item)}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>

                                    <div className='col-lg-6'>
                                        <div>
                                            <ul className='mb-0'>
                                                {
                                                    ClientsData?.clientsmore.map((item, index) => {
                                                        return (
                                                            <li style={{ margin: 0 }} key={index}>{parse(item)}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Clients