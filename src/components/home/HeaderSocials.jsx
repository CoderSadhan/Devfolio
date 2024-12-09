import React from 'react';
import { FaGithub, FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';


const HeaderSocials = () => {
    return (
        <div className='home__socials'>
            <a href='https://github.com/CoderSadhan' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaGithub />
            </a>

            <a href='https://www.linkedin.com/in/sadhan-das-82a465246/' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
            </a>

            <a href='https://www.facebook.com/sadhan.das.52438' className='home__social-link' target='_blank' rel='noreferrer'>
                <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/_im_sadhan_09_/" className="home__social-link" target="_blank"rel="noreferrer">
                 <FaInstagram />
             </a>


            <a href='https://x.com/SadhanVK18?t=EgZgt-AdVAIKWVKYOEBnCA&s=09' className='home__social-link' target='__blank' rel='noreferrer'>
                <FaTwitter />
            </a>
        </div>
    );
};

export default HeaderSocials;
