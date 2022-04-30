import React from 'react';
import undrawTeam from "../Whoarewe components/Who are we assets/undraw_team.svg";

const Whatweoffer = () => {
    return (
        <div className="whatWeOffer__container">
            <div>    
                <h1 id="whatWeOffer__heading">Why choose us?</h1>
                <ul>
                    <li className='whatWeOffer__list'>No lock in contracts</li>
                    <li className='whatWeOffer__list'>Flat rate fees</li>
                    <li className='whatWeOffer__list'>Speak direct with the people doing the work, no middle-man</li>
                    <li className='whatWeOffer__list'>range of services to help your business expand</li>
                </ul>
            </div>
            <figure>
                <img src={undrawTeam} id="undrawTeam__img" alt="" />
            </figure>
        </div>
    );
}

export default Whatweoffer;
