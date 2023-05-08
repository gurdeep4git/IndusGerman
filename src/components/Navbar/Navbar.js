import React from 'react'
import { Link } from 'react-router-dom';
import data from '../../data/navbar.json';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to={'/home'}>Indus German</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        {
                            data.map((item, index) => {
                                if (item.subMenu?.length === 0) {
                                    return (
                                        <li key={index} className="nav-item">
                                            <Link to={item.link} className="nav-link">{item.title}</Link>
                                        </li>
                                    )
                                }
                                else {
                                    return (
                                        <li key={index} className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
    )
}

export default Navbar