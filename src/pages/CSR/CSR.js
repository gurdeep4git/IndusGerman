import React from 'react'
import CSRData from '../../data/csr.json';
import PageBanner from '../../components/PageBanner/PageBanner';

function CSR() {
    return (
        <>
            <PageBanner title={CSRData.title} />

            <section className='section-pad'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className='product-title'>{CSRData?.title}</h2>
                            <div className='about-content wow fadeInUp'>
                                <div className='row'>
                                    <div className='col'>
                                        Jupiter Smile Foundation is a non-profit NGO with Regd. no._____________
                                        aims to feed hundreds of people on daily basis.

                                        All Donation are exempted under Section _____________________vide Letter no._____________
                                        Bank Account Details

                                        Email:
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

export default CSR