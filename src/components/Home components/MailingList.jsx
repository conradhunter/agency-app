import React from 'react';
import undraw1 from "./home-assets/undraw1.svg";

const Mailinglist = () => {
    return (
        <div className="mailing__list">
            <div className="mailing__input">
                <div>
                    <h3 className="mailingList__heading">Join our mailing list!</h3>
                    <input id='mailingList__input' type="email" />
                    <button className='btn'>Join</button>
                </div>
                <figure>
                    <img src={undraw1} id="mailingList__img" alt="" />
                </figure>
            </div>
        </div>
    );
}

export default Mailinglist;
