import React from 'react'
import './Contactbar.css';

function Contactbar() {
    return (
        <>
            <div className='contact-bar py-2'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <a href="mailto:sales@forcetoindia.com">
                                <span>Email : </span>
                                sales@forcetoindia.com</a>
                        </div>
                        <div className="col-12 col-sm-6 text-sm-end">
                            <a href="tel:+91-9289661157">
                                <span>Call : </span>
                                <span className='fs-5 fw-bold'>+91-92896 61157</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactbar