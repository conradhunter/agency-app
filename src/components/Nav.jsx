import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./Components.css"
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.png";


const Nav = () => {
    return (
        <div className="nav__bar">
            <nav>
                <figure>
                    <img src={Logo} alt="" className="logo" />
                </figure>
                <ul className="nav__bar--links">
                    <li>
                        <Link to="/" className="nav__bar--link link__hover--effect">Home</Link>
                    </li>
                    <li>
                        <Link to="/Who-are-we" className="nav__bar--link link__hover--effect">Who are we?</Link>
                    </li>
                    <li>
                        <Link to="/Services" className="nav__bar--link link__hover--effect">Services</Link>
                    </li>
                    <li>
                        <Link to="/Contact" className="nav__bar--link link__hover--effect">Contact Us</Link>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/" target="_blank" className="nav__bar--link nav__bar--icon">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/" target="_blank" className="nav__bar--link nav__bar--icon">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
