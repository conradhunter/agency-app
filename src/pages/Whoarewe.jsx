import React from 'react';
import Theteam from '../components/Whoarewe components/TheTeam';
import Whatweoffer from '../components/Whoarewe components/WhatWeOffer';
import "./Whoarewe.css";

const Whoarewe = () => {
    return (
        <div className="whoAreWe__page">
            <div className="row">
                <Whatweoffer />
                <Theteam />
            </div>
        </div>
    );
}

export default Whoarewe;
