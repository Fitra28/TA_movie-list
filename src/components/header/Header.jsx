import React from 'react';

import { Link } from 'react-router-dom';

import './header.scss';

import logo from '../../assets/icon logo.jpg';

const Header = () => {


    return (
        <div className="header">
            <div className="header__wrap container">
                <div className="logo">
                    <img src={logo} alt="" />
                    <ul>
                    <Link to="/">Movies list</Link>
                    </ul>
                    
                </div>


            </div>
        </div>
    );
}

export default Header;
