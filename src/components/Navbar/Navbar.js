import React from 'react'
import { Link } from 'react-router-dom';
import { NavbarData } from '../../data/navbar-data.js';
import './Navbar.css';
import Contactbar from '../Contactbar/Contactbar';

function Navbar() {
    return (
        <>
            <Contactbar />

            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link className="navbar-brand" to={'/home'}>
                        <img className='logo' src='/assets/images/logo.png' alt='logo' />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            {
                                NavbarData.map((item, index) => {
                                    if (item.subMenu?.length === 0) {
                                        return (
                                            <li key={index} className="nav-item">
                                                <Link to={item.link} className="nav-link p-lg-3">{item.title}</Link>
                                            </li>
                                        )
                                    }
                                    else {
                                        return (
                                            <li key={index} className="nav-item dropdown">
                                                <a href="!#" className="nav-link dropdown-toggle p-lg-3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    {item.title}
                                                </a>
                                                <ul className="dropdown-menu">
                                                    {
                                                        item.subMenu.map((submenu, index) => {
                                                            return (
                                                                <li key={index}>
                                                                    <Link to={submenu.link} className="dropdown-item">{submenu.title}</Link>
                                                                </li>
                                                            )
                                                        })
                                                    }

                                                </ul>
                                            </li>
                                        )
                                    }
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar