import React from 'react'
import './Footer.css';
import { NavbarData } from '../../data/navbar-data'
import data from '../../data/footer.json';
import { Link } from 'react-router-dom';
import ContactData from '../../data/contact.json';

function Footer() {
    const productsList = NavbarData.filter(i => i.title === 'Products')[0].subMenu;

    return (
        <>
            <div className="footer bg-color section-pad">
                <div className="container">
                    <div className="row wow fadeInUp">
                        <div className="col-md-6 col-lg-5 mb-4 mb-lg-0">
                            <div className='brand-text'>
                                <h3 className='fs-3'>Indus<span>German</span></h3>
                                <p>IndusGerman provides secure, reliable integrated technology solutions for the category of Surgical, and Endoscopy instruments equipment and majorly focused on Manufacturing, Development and Import   Export of new technology with the finest quality equipment and instruments.</p>

                                <div className='my-4'>
                                    <div>
                                        <img className='certification-logo' src='/assets/images/startup.png' />
                                        <img className='certification-logo' src='/assets/images/make_in_india.png' />
                                        <img className='certification-logo' src='/assets/images/msme.png' />
                                    </div>

                                    <div className='mt-4'>
                                        <img className='certification-logo' src='/assets/images/iaf.jpg' />
                                        <img className='certification-logo' src='/assets/images/bscic.png' />
                                        <img className='certification-logo sm' src='/assets/images/iso.png' />
                                    </div>

                                    <div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2 mb-4 mb-lg-0">
                            <h3 className='footer-title mb-3'>Products</h3>
                            <div className='footer-products'>
                                <ul>
                                    {
                                        productsList.map((product, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link to={product.link}>
                                                        <i className="bi bi-chevron-right"></i>
                                                        {product.title}
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-2 mb-4 mb-lg-0">
                            <h3 className='footer-title mb-3'>Useful Links</h3>
                            <div className='footer-products'>
                                <ul>
                                    {
                                        data.links.map((link, index) => {
                                            return (
                                                <li key={index}>
                                                    <Link to={link?.link}>
                                                        <i className="bi bi-chevron-right"></i>
                                                        {link.title}
                                                    </Link>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
                            <h3 className='footer-title mb-3'>Contact Us</h3>
                            <div>
                                <p>
                                    29, 1st floor, Patparganj
                                    <br />
                                    Delhi-110092
                                    <br />
                                    INDIA
                                    <br />
                                    <br />
                                    <strong>Phone: </strong>
                                    {ContactData.phone}
                                    <br />
                                    <strong>Email: </strong>
                                    {ContactData.email}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer