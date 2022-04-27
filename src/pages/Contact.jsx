import React from 'react';
import contactImg from "../assets/undraw_contact.svg";

const Contact = () => {
    return (
        <div className="contact">
            <div className="row">
                <div className="contact__us">
                    <div className="contact__img">
                        <figure>
                            <img src={contactImg} alt="" />
                        </figure>
                    </div>
                    <div className="contact__form--container">
                        <form>
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
                            <div className='text__area'>
                                <label htmlFor="" className="form__label">Message</label>
                                <textarea name="message" id="text__area" cols="30" rows="10"></textarea>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
