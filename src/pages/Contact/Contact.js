import React, { useState } from 'react'
import PageBanner from '../../components/PageBanner/PageBanner';
import ContactData from '../../data/contact.json';
import axios from 'axios';

function Contact() {
    const initContactInfo = {
        'fullName': '',
        'email': '',
        'subject': '',
        'message': ''
    }

    const [contactInfo, setContactInfo] = useState(initContactInfo);

    const onInputChangeHandler = (event) => {
        setContactInfo(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value
            }
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (isFormValid()) {

            // const url = `http://indusgerman.v4utech.com/sendmail/index.php`;

            // axios(url, {
            //     method: 'POST',
            //     mode: 'no-cors',
            //     headers: {
            //         'Access-Control-Allow-Origin': '*',
            //         'Content-Type': 'application/json',
            //     },
            // }).then(response => {
            //     console.log(response)
            // })



            const xhr = new XMLHttpRequest();

            xhr.addEventListener('load', () => {
                console.log(xhr.responseText)
            })

            const url = `http://indusgerman.v4utech.com/sendmail/index.php?sendTo=${contactInfo.email}&name=${contactInfo.fullName}&subject=${contactInfo.subject}&message=${contactInfo.message}`;
            xhr.open('GET', url);

            xhr.send();
        }

    }

    const isFormValid = () => {
        for (let k in contactInfo) {
            if (contactInfo[k] !== "") {
                return true;
            }
        }
        return false;
    }

    return (
        <>
            <PageBanner title={ContactData.title} />

            <section className='section-pad'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className='product-title'>{ContactData?.title}</h2>
                            <div className='about-content wow fadeInUp'>
                                <div className='row'>
                                    <div className='col-lg-8 mb-5 mb-lg-0'>
                                        <form onSubmit={onSubmitHandler}>
                                            <div className='row mb-lg-4 mb-3'>
                                                <div className='col-lg-6'>
                                                    <div className='mb-3 mb-lg-0'>
                                                        <label>Full Name</label>
                                                        <input type='text' onChange={onInputChangeHandler} value={contactInfo.fullName} name="fullName" className='form-control' required />
                                                    </div>
                                                </div>
                                                <div className='col-lg-6'>
                                                    <div>
                                                        <label>Email</label>
                                                        <input type='email' onChange={onInputChangeHandler} value={contactInfo.email} name="email" className='form-control' required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row mb-lg-4 mb-3'>
                                                <div className='col'>
                                                    <div>
                                                        <label>Subject</label>
                                                        <input type='text' onChange={onInputChangeHandler} value={contactInfo.subject} name="subject" className='form-control' required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row mb-lg-4 mb-3'>
                                                <div className='col'>
                                                    <div>
                                                        <label>Message</label>
                                                        <textarea onChange={onInputChangeHandler} value={contactInfo.message} name="message" className='form-control' rows="5" required></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <button type='submit' className='btn btn-primary bg-first-color'>Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className='col-lg-3 offset-lg-1'>
                                        <div>
                                            <strong>Location</strong>
                                            <br />
                                            IG Instruments Pvt Ltd.
                                            <br />
                                            <p>
                                                29, 1st floor, Patparganj
                                                <br />
                                                Delhi-110092
                                                <br />
                                                INDIA
                                                {/* <br />
                                                <br /> */}

                                            </p>
                                        </div>
                                        {/* <div>
                                            <strong>Phone: </strong>
                                            {ContactData.phone}
                                            <br />
                                            <strong>Email: </strong>
                                            {ContactData.email}
                                        </div> */}
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

export default Contact