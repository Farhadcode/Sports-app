import { faFacebook, faInstagram, faTwitterSquare, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkedAlt, faPhoneVolume, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";


const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="left-container text-start">
                                <h1>Biona Sports Club</h1>
                                <div className="icons-container d-flex text-center ">
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faYoutubeSquare}></FontAwesomeIcon>
                                    </div>
                                    <div className="icon">
                                        <FontAwesomeIcon icon={faTwitterSquare}></FontAwesomeIcon>
                                    </div>
                                </div>
                                <p className="mt-4 ">
                                    <small>
                                        *These statements have not been evaluated by the Food and
                                        Drug Administration. These products are not intended to
                                        diagnose.
                                    </small>
                                </p>

                                {/* <p className="mt-5">
                                    <small>Zemez © . All rights reserved.</small>
                                </p> */}
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footer-menu-container">
                                <ul>
                                    <li className="footer-menu">Home</li>
                                    <li className="footer-menu">Services</li>
                                    <li className="footer-menu">Sports</li>
                                    <li className="footer-menu">Contact us</li>
                                    <li className="footer-menu"> About us</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="right-footer-container">
                                <h3>Sign up for the newsletter</h3>
                                <input
                                    className="footer-input"
                                    type="text"
                                    placeholder="Enter Email"
                                />
                                <div className="phone d-flex align-items-center justify-content-center mt-4">
                                    <div className="foter-phone-icon">
                                        <FontAwesomeIcon icon={faPhoneVolume}></FontAwesomeIcon>
                                    </div>
                                    <div>
                                        <h5>+1 8 800 555 35 35</h5>
                                    </div>
                                </div>
                                <div className="map d-flex align-items-center justify-content-center">
                                    <div className="foter-phone-icon">
                                        <FontAwesomeIcon icon={faMapMarkedAlt} />
                                    </div>
                                    <div>
                                        <p>
                                            160 Broadway, New York, NY 10038,
                                            <br /> 102 1st Avenue, New York, NY 100
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <p className="mt-5  d-flex justify-content-center">
                    <small>Zemez © . All rights reserved.</small>
                </p>
            </div>

        </div>
    );
};

export default Footer;