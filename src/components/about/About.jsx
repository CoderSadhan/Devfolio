import React from 'react';
import './About.css';
import Image from '../../assets/ME.jpg';
import Resume from '../../assets/resume.pdf';
// import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                        Hello!<br/>
I'm Sadhan Das from Coochbehar, West Bengal. Currently I'm pursuing Bachelor of Engineering in Information Technology at University Institute of Technology. 

I’m on an exciting journey of learning and growth. I’m currently focused on improving my skills and expanding my portfolio by building creative and impactful projects. My goal is to keep improving as a software engineer while contributing as a dedicated  role I take on.

I’m always eager to explore new technologies and solve real-world problems.<br /><br />
                            Here are a few technologies I’ve been working with recently:
                        </p>
                        <ul className="about__list">
                            <li>HTML & CSS</li>
                            <li>React</li>
                            <li>JavaScript (ES6+)</li>
                           
                           
                            
                            <li>NextJS</li>
                            <li>Node.js</li>
                            <li>SQL</li>
                            <li>Mongo DB</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Donwload CV</button>
                    </div>
                    <br/>

                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Communication</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage communication">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Problem Solving</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage problemsolving">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Teamwork</h3>
                                <span className="skills__number">100%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage teamwork">

                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <AboutBox /> */}
        </section>
    )
}

export default About