import React from 'react';
import { Link } from 'react-router-dom';
import "./Components.css";
import logo from "../assets/connected-logo-large.png";

const Footer = () => {
    return (
        <div className="footer">
            <div className='footer__main--content'>
                <div>
                    <ul className="footer__links">
                        <li>
                            <Link to="/" className="footer__link link__hover--effect">Home</Link>
                        </li>
                        <li>
                            <Link to="/Who-are-we" className="footer__link link__hover--effect">Who are we?</Link>
                        </li>
                        <li>
                            <Link to="/Services" className="footer__link link__hover--effect">Services</Link>
                        </li>
                        <li>
                            <Link to="/Contact" className="footer__link link__hover--effect">Contact Us</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer__img--copyright">
                    <img className='footer__logo' src={logo} alt="" />
                    <h3 className="footer__copyright">Copyright &copy; Connected. All Rights Reserved</h3>
                </div>
            </div>
        </div>
    );
}

export default Footer;
