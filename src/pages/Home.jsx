import React from 'react';
import "./Home.css";
import Introduction from '../components/Home components/Introduction';
import Servicesoutline from '../components/Home components/ServicesOutline';
import Faq from '../components/Home components/FAQ';

const Home = () => {
    return (
        <div className="home__page">
            <div className="row">
                <Introduction />
                <Servicesoutline />
                <Faq />
            </div>
        </div>
    );
}

export default Home;
