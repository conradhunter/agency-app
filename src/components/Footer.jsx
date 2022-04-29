import React from 'react';
import { Link } from 'react-router-dom';
import "./Components.css";

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
                    <img className='footer__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png" alt="" />
                    <h3 className="footer__copyright">COPYRIGHT &copy; INSERT BUSINESS NAME. ALL RIGHTS RESERVED</h3>
                </div>
            </div>
        </div>
    );
}

export default Footer;
