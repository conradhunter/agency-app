import { faSortDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';


const Faq = () => {
    return (
        <div className="faq__container">
            <h1 className="faq__heading">Frequently Asked Questions</h1>
            <div className="ques__answ">
                <div className='question__accordion'>
                    <h3 className="question">This is a question</h3>
                    <a href="" >
                        <FontAwesomeIcon icon={faSortDown} className="accordion__icon" />
                    </a>
                </div>
                <p id='answer'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem fugit commodi, quod
                     beatae, libero quas nisi veniam placeat reprehenderit eius minima doloremque doloribus 
                     cum atque eaque nobis similique eligendi voluptas!
                </p>
            </div>
            <div className="ques__answ">
                <div className='question__accordion'>
                    <h3 className="question">This is a question</h3>
                    <a href="" >
                        <FontAwesomeIcon icon={faSortDown} className="accordion__icon" />
                    </a>
                </div>
                <p id='answer'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem fugit commodi, quod
                     beatae, libero quas nisi veniam placeat reprehenderit eius minima doloremque doloribus 
                     cum atque eaque nobis similique eligendi voluptas!
                </p>
            </div>
            <div className="ques__answ">
                <div className='question__accordion'>
                    <h3 className="question">This is a question</h3>
                    <a href="" >
                        <FontAwesomeIcon icon={faSortDown} className="accordion__icon" />
                    </a>
                </div>
                <p id='answer'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem fugit commodi, quod
                     beatae, libero quas nisi veniam placeat reprehenderit eius minima doloremque doloribus 
                     cum atque eaque nobis similique eligendi voluptas!
                </p>
            </div>
            <div className="ques__answ">
                <div className='question__accordion'>
                    <h3 className="question">This is a question</h3>
                    <a href="" >
                        <FontAwesomeIcon icon={faSortDown} className="accordion__icon" />
                    </a>
                </div>
                <p id='answer'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem fugit commodi, quod
                     beatae, libero quas nisi veniam placeat reprehenderit eius minima doloremque doloribus 
                     cum atque eaque nobis similique eligendi voluptas!
                </p>
            </div>
        </div>
    );
}

export default Faq;
