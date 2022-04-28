import React from 'react';
import "./Home.css";
import Logo from "../assets/logo.png";

const Home = () => {
    return (
        <div className="home__page">
            <div className="row">
                <section className="intro__container">
                    <figure>
                        <img src={Logo} alt="" className="intro__img" />
                    </figure>
                    <h1 className="intro__h1">Connected is a creative agency that provides all the essential components for your business.</h1>
                </section>
            </div>
        </div>
    );
}

export default Home;
