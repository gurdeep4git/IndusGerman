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
                                    <div className='col-lg-6'>
                                        <section>
                                            We support our sister concern, Jupiter Smile Foundation, a non-profit organization, feeding hundreds of people on daily basis.
                                            <br />
                                            <span style={{ marginRight: '8px' }}>Registration Number:</span><b>U85300UP2020NPL134525</b>
                                            <br />
                                            <div className='d-flex'>
                                                <div style={{ marginRight: '8px' }}>
                                                    <b>Bank Account Details:</b>
                                                </div>
                                                <div>
                                                    Jupiter Smile Foundation<br />
                                                    IDFC Bank<br />
                                                    Noida Sec-18<br />
                                                    A/C Number: 5562586509<br />
                                                    IFSC: IDFB0020151
                                                </div>
                                            </div>
                                            All donations are exempted under section 80G/12AA
                                        </section>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className='row'>
                                            <div className='col-lg-6 my-lg-4'>
                                                <div className='image-container mb-3 mb-lg-0'>
                                                    <img className='img-fluid img-thumbnail' alt='' src='/assets/images/csr/csr-01.jpg' />
                                                </div>
                                            </div>
                                            <div className='col-lg-6'>
                                                <div className='image-container mb-3 mb-lg-0'>
                                                    <img className='img-fluid img-thumbnail' alt='' src='/assets/images/csr/csr-2.jpg' />
                                                </div>
                                                <div className='image-container mb-3 mb-lg-0'>
                                                    <img className='img-fluid img-thumbnail' alt='' src='/assets/images/csr/csr-3.jpg' />
                                                </div>
                                            </div>
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

export default CSR