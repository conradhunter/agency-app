import React from 'react';
import "./Pages.css";
import undrawImg from "../assets/undraw-1.svg";
import wave from "../assets/wave.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faRectangleAd, faLightbulb, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="home__page">
            <div className="row">
                <section className="about__agency">
                    <figure>
                        <img src={undrawImg} alt="" className="undraw__img" />
                    </figure>
                    <div className="about__us--container">
                        <h1 className="about__us">What is <span className="red">INSERT BUSINESS NAME</span></h1>
                        <p className='about__us--para'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloremque 
                            id reiciendis, fugiat fuga hic nobis officiis quibusdam natus, aliquam
                            exercitationem inventore fugit dolorum repellat in eligendi rem? Quis, nostrum!
                        </p>
                        <p className='about__us--para'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloremque 
                            id reiciendis, fugiat fuga hic nobis officiis quibusdam natus, aliquam
                            exercitationem inventore fugit dolorum repellat in eligendi rem? Quis, nostrum!
                        </p>
                    </div>
                </section>
            </div>
                <figure>
                    <img src={wave} alt="" />
                </figure>
            <div className="services">
                <div className="row">
                    <section className="our__services">
                        <div className='services__info'>
                            <h1 className="services__heading">Our Services</h1>
                            <p className='services__para'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam doloremque 
                                id reiciendis, fugiat fuga hic nobis officiis quibusdam natus, aliquam
                                exercitationem inventore fugit dolorum repellat in eligendi rem? Quis, nostrum!
                            </p>
                            <Link to="/Services" className='btn'>See our Packages</Link>
                        </div>
                        <div className="services__icons">
                            <FontAwesomeIcon className='services__icon rotate__animation' icon={faLaptopCode} />
                            <FontAwesomeIcon className='services__icon rotate__animation' icon={faRectangleAd} />
                            <FontAwesomeIcon className='services__icon rotate__animation' icon={faLightbulb} />
                            <FontAwesomeIcon className='services__icon rotate__animation' icon={faPeopleGroup} />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Home;
