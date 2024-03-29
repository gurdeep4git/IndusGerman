import React, { useState } from 'react'
import PageBanner from '../../components/PageBanner/PageBanner';
import ContactData from '../../data/contact.json';
import axios from 'axios';
import './Contact.css';

function Contact() {
    const initContactInfo = {
        'fullName': '',
        'email': '',
        'subject': '',
        'message': '',
        'phone': '',
        'institution': '',
        'request': 'demonstration'
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

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        if (!isFormValid()) {
            return;
        }

        // try {
        //     const url = `http://indusgerman.com/sendmail/index.php`;
        //     const response = await axios.post(url, JSON.stringify(contactInfo), {
        //         headers: {
        //             "Content-Type": 'application-json'
        //         }
        //     });
        //     console.log(response)
        // } catch (error) {
        //     console.log(error)
        // }

        // if (isFormValid()) {

        //     const url = `http://indusgerman.com/sendmail/index.php`;

        //     axios.post(url, contactInfo)
        //         .then(() => { })
        //         .catch(() => { })

        //     // const xhr = new XMLHttpRequest();

        //     // xhr.addEventListener('load', () => {
        //     //     console.log(xhr.responseText)
        //     // })

        //     // const url = `http://indusgerman.com/sendmail/index.php?sendTo=${contactInfo.email}&name=${contactInfo.fullName}&phone=${contactInfo.phone}&institution=${contactInfo.institution}&request=${contactInfo.request}&subject=${contactInfo.subject}&message=${contactInfo.message}`;
        //     // xhr.open('GET', url);

        //     // xhr.send();
        // }

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
                                                        <label>Full Name<sup>*</sup></label>
                                                        <input type='text' onChange={onInputChangeHandler} value={contactInfo.fullName} name="fullName" className='form-control' required />
                                                    </div>
                                                </div>
                                                <div className='col-lg-6'>
                                                    <div>
                                                        <label>Email<sup>*</sup></label>
                                                        <input type='email' onChange={onInputChangeHandler} value={contactInfo.email} name="email" className='form-control' required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row mb-lg-4 mb-3'>
                                                <div className='col-lg-6'>
                                                    <div className='mb-3 mb-lg-0'>
                                                        <label>Phone<sup>*</sup></label>
                                                        <input type='text' maxLength="10" onChange={onInputChangeHandler} value={contactInfo.phone} name="phone" className='form-control' required />
                                                    </div>
                                                </div>
                                                <div className='col-lg-6'>
                                                    <div>
                                                        <label>Institution<sup>*</sup></label>
                                                        <input type='text' onChange={onInputChangeHandler} value={contactInfo.institution} name="institution" className='form-control' required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row mb-lg-4 mb-3'>
                                                <div className='col'>
                                                    <div>
                                                        <label>Request<sup>*</sup></label>
                                                        <select onChange={onInputChangeHandler} value={contactInfo.request} name="request" className='form-control' required>
                                                            <option value="feedback">Feedback</option>
                                                            <option value="suggestion">Suggestion</option>
                                                            <option value="query">Query</option>
                                                            <option value="complaint">Complaint</option>
                                                            <option value="demonstration">Demonstration</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row mb-lg-4 mb-3'>
                                                <div className='col'>
                                                    <div>
                                                        <label>Subject<sup>*</sup></label>
                                                        <input type='text' onChange={onInputChangeHandler} value={contactInfo.subject} name="subject" className='form-control' required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row mb-lg-4 mb-3'>
                                                <div className='col'>
                                                    <div>
                                                        <label>Message<sup>*</sup></label>
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
                                            </p>
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

export default Contact