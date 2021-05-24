import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo/makers_logo.svg';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return (
        <div className="nav">
            <div className="nav-wrapper">
                <Link to="/">
                    <div className="nav-logo">
                        <img src={logo} alt="Logo fo makers"/>
                    </div>
                </Link>
                <div className={click ? 'nav-links active' : 'nav-links'}>
                    <div className="nav-link"><HashLink  smooth to="#pros" onClick={closeMobileMenu} className="link"> Преимущества</HashLink></div>
                    <div className="nav-link"><HashLink  smooth to="#stack" onClick={closeMobileMenu} className="link">Технологии</HashLink></div>
                    <div className="nav-link"><HashLink  smooth to="#seven" onClick={closeMobileMenu} className="link">Поступление</HashLink></div>
                </div>
                <div className="nav-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;