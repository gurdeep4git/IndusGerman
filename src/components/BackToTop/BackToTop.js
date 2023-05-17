import React, { useState } from 'react';
import './BackToTop.css';

function BackToTop() {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <>
            <div className='back-to-top shadow' style={{ display: visible ? 'block' : 'none' }} onClick={scrollToTop}>
                <i className="bi bi-arrow-up"></i>
            </div>
        </>
    )
}

export default BackToTop