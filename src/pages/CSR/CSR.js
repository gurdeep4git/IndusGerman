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
                                        We support our sister concern, Jupiter Smile Foundation, a non-profit organization, feeding hundreds of people on daily basis.
                                        <br />
                                        <span style={{ marginRight: '8px' }}>Registration Number:</span>U85300UP2020NPL134525
                                        <br />
                                        <div className='d-flex'>
                                            <div style={{ marginRight: '8px' }}>
                                                Bank Account Details:
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