import React from 'react';
import logo from "../Home components/home-assets/connected-logo.png";

const Introduction = () => {
    return (
        <div className="intro__container">
            <figure>
                <img src={logo} alt="" className="intro__img" />
            </figure>
            <h1 className="intro__h1">Connected is a creative agency that provides your business
            with all the marketing and web development needs.
            </h1>
        </div>
    );
}

export default Introduction;
