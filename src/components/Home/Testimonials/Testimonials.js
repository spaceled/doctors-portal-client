import React from 'react';
import './Testimonials.css';
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';
import Testimonial from '../Testimonial/Testimonial';

const testimonialData = [
    {
        quote: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi voluptate suscipit libero fugit porro ut, aliquam explicabo consectetur corporis. Ullam nulla sapiente inventore officia ipsum quos labore a incidunt autem?',
        name: 'Wilson Harry',
        from: 'Jacksonville',
        img: wilson
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi voluptate suscipit libero fugit porro ut, aliquam explicabo consectetur corporis. Ullam nulla sapiente inventore officia ipsum quos labore a incidunt autem?',
        name: 'Aliza Kuddus',
        from: 'California',
        img: ema
    },
    {
        quote: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi voluptate suscipit libero fugit porro ut, aliquam explicabo consectetur corporis. Ullam nulla sapiente inventore officia ipsum quos labore a incidunt autem?',
        name: 'Ema Watson',
        from: 'Virginia',
        img: aliza
    }
]

const Testimonials = () => {
    return (
        <section className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5 className="text-primary text-uppercase">Testimonial</h5>
                    <h1>What Our Patients <br /> Says </h1>
                </div>
                <div className="d-flex text-align-center mt-5">
                    {
                        testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default Testimonials;