import { faChess, faCode, faComment, faCopyright, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Servicesoutline = () => {
    return (
        <div className="services__outline">
            <div id='home__heading'>
                <h1 className="intro__services--h1">What can we offer your business?</h1>
            </div>
            <div className="services__icons">
                <div className='home__icon--container'>
                    <FontAwesomeIcon className='home__icon' icon={faCopyright} />
                </div>
                <div className='home__icon--container'>
                    <FontAwesomeIcon className='home__icon' icon={faPen} />
                </div>
                <div className='home__icon--container'>
                    <FontAwesomeIcon className='home__icon' icon={faCode} />
                </div>
                <div className='home__icon--container'>
                    <FontAwesomeIcon className='home__icon' icon={faChess} />
                </div>
                <div className='home__icon--container'>
                    <FontAwesomeIcon className='home__icon' icon={faComment} />
                </div>
            </div>
        </div>
    );
}

export default Servicesoutline;
