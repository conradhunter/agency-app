import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Theteam = () => {
    return (
        <div className="team__container">
            <figure className='team__member'>
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQFGSpGEjgx2rA/profile-displayphoto-shrink_800_800/0/1646976561309?e=1656547200&v=beta&t=zZ4JUbnm-QdyD2bFb0Jhd85vh7z2nZe-TYypSMjoYas" className="member__img" alt="" />
                <h1 className="member">Cam Andrew</h1>
                <h4 className="member__role">Customer Experience Directive</h4>
                <a href="">
                    <FontAwesomeIcon id='member__icon' icon={faLinkedinIn} />
                </a>
            </figure>
            <figure className='team__member'>
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQE_QT9ASr9ekw/profile-displayphoto-shrink_800_800/0/1596499490879?e=1656547200&v=beta&t=zoJ0Vn2k6XwG6Ba0gY7Kfh6pBp4F1zlDjDLcjasouCA" className="member__img" alt="" />
                <h1 className="member">Yuvaan Bobee</h1>
                <h4 className="member__role">Marketing and Sales</h4>
                <a href="">
                    <FontAwesomeIcon id='member__icon' icon={faLinkedinIn} />
                </a>
            </figure>
            <figure className='team__member'>
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQFUgBRmLhxgew/profile-displayphoto-shrink_800_800/0/1647563682633?e=1656547200&v=beta&t=jRFELtGzd-Vwy3_AypRvoIAEan73kuKbVVGLyOSnnK0" className="member__img" alt="" />
                <h1 className="member">Conrad Hunter</h1>
                <h4 className="member__role">Web Developer</h4>
                <a href="">
                    <FontAwesomeIcon id='member__icon' icon={faLinkedinIn} />
                </a>
            </figure>
        </div>
    );
}

export default Theteam;
