import React from 'react'
import './Contactbar.css';
import ContactData from '../../data/contact.json';

function Contactbar() {
    return (
        <>
            <div className='contact-bar py-2'>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <a href="mailto:info@indusgerman.com">
                                <span>Email : </span>
                                {ContactData.email}</a>
                        </div>
                        <div className="col-12 col-sm-6 text-sm-end">
                            <a href="tel:+91-9810349823">
                                <span>Call : </span>
                                <span className='fs-5 fw-bold'>{ContactData.phone}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactbar