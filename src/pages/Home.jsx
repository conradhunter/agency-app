import React from 'react';
import "./Home.css";
import Introduction from '../components/Home components/Introduction';
import Servicesoutline from '../components/Home components/ServicesOutline';
import Faq from '../components/Home components/FAQ';
import Mailinglist from '../components/Home components/MailingList';

const Home = () => {
    return (
        <div className="home__page">
            <div className="row">
                <Introduction />
                <Servicesoutline />
                <Faq />
                <Mailinglist /> 
            </div>
        </div>
    );
}

export default Home;
