import React from 'react'
import { Link } from 'react-router-dom';
import './Banner.css';

function Banner() {
    return (
        <>
            <div className='banner'>
                <div className='blur'>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-xl-6">
                                <div className='margin wow fadeInDown' data-wow-delay="0.1s">
                                    <h1 className="my-3 title">an ISO 13485:2016 &amp; ISO 9001:2015 Certified Company</h1>
                                    <p className='text'>by CDSCO (Govt. Of India) notified body</p>
                                    <Link to={'/contact'}>
                                        <button className='btn btn-primary bg-first-color'>Request for Demo</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner