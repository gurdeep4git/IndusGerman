import React from 'react'
import './Footer.css';
import products from '../../data/navbar.json'
import data from '../../data/footer.json';
import { Link } from 'react-router-dom';

function Footer() {
    const productsList = products.filter(i => i.title === 'Products')[0].subMenu;

    return (
        <>
            <div className="footer bg-color section-pad">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 mb-4 mb-lg-0">
                            <div className='brand-text'>
                                <h3 className='fs-3'>Indus<span>German</span></h3>
                                <p>IndusGerman provides secure, reliable integrated technology solutions for the category of Surgical, and Endoscopy instruments equipment and majorly focused on Manufacturing, Development and Import   Export of new technology with the finest quality equipment and instruments.</p>
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
                                                    <Link to={product.link}>{product.title}</Link>
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
                                                    <Link to={link?.link}>{link.title}</Link>
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
                                    32, 1st floor, F.I.E., Patparganj
                                    <br />
                                    Delhi-110092
                                    <br />
                                    INDIA
                                    <br />
                                    <br />
                                    <strong>Phone: </strong>
                                    +91-98103 49823
                                    <br />
                                    <strong>Email: </strong>
                                    info@indusgerman.com
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