import React from 'react';
import './Services.css';
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/Web.webp'
import Image3 from '../../assets/service-2.svg'

const data = [
    {
        id: 1,
        image: Image1,
        title: "Responsive Web Design",
        description:
            "Designing user-friendly and attractive interfaces that work smoothly on all devices and screens",
    },
    {
        id: 2,
        image: Image2,
        title: "Website Optimization",
        description:
            "Making a website faster, easier to use, and better for search engines to improve user experience and performance",
    },
    {
        id: 3,
        image: Image3,
        title: "Software Development",
        description:
            "Creating and maintaining software or applications to solve specific problems and meet user needs effectively",
    },
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Services</h2>

            <div className="services__container grid">
                {data.map(({ id, image, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <img src={image} alt='' className='services__img' width="80" />

                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Services