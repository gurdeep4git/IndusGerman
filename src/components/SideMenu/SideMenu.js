import React from 'react'
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import { ProductsNavData } from "../../data/products";
import './SideMenu.css';

function SideMenu() {

    const key = useLocation().pathname.split('/')[2];
    const subProductsNav = ProductsNavData.filter(s => s.key === key)[0].subProducts;

    return (
        <div>
            <div className='sub-menu-container'>
                <ul className='sub-menu'>
                    {
                        subProductsNav.map((nav, index) => {
                            return (
                                <li key={index}>
                                    <Link to={nav?.link}>
                                        <i className="bi bi-chevron-right"></i>
                                        {nav?.title}
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default SideMenu