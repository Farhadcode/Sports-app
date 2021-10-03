import React from 'react';
import logo from "../../images/logo/baller-logo-3.png";
import { Link } from 'react-router-dom';
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Banner from '../Banner/Banner';
const Header = () => {
    return (
        <>
            <div className="header">
                <img className="logo" src={logo} alt="" />
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/sports">Sports</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/shop"> <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></Link>
                </nav>

            </div>
            <Banner></Banner>
        </>
    );


};

export default Header;