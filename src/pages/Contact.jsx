import React from 'react';
import "./Contact.css"

const Contact = () => {  

    return (
        <div className="contact">
            <div className="row">
                <div className="contact__us">
                    <div className="contact__form--container">
                        <h1 id="contact__heading">Get in touch with us!</h1>
                        <form id='contactPage__form'>
                            <div className='input__container'>
                                <label htmlFor="" className="form__label">First Name</label>
                                <input className='form__input' type="text" />
                            </div>
                            <div className='input__container'>
                                <label htmlFor="" className="form__label">Last Name</label>
                                <input className='form__input' type="text" />
                            </div>
                            <div className='input__container'>
                                <label htmlFor="" className="form__label">Email</label>
                                <input className='form__input' type="text" />
                            </div>
                            <div className='input__container'>
                                <label htmlFor="" className="form__label">Company Name</label>
                                <input className='form__input' type="text" />
                            </div>
                            <div className='input__container'>
                                <label htmlFor="" className="form__label">Phone Number</label>
                                <input className='form__input' type="text" />
                            </div>
                            <div className='input__container'>
                                <label htmlFor="" className="form__label">Subject of message</label>
                                <input className='form__input' type="text" />
                            </div>
                            <div className='text__area' id='span__two'>
                                <label htmlFor="" className="form__label">Message</label>
                                <textarea placeholder='Anything you want us to know before we chat?' name="message" id="text__area"></textarea>
                            </div>
                        </form>
                        <button className="btn" id='contact__btn'>Send it our way!</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
