import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/7.jpeg'
import AVTR2 from '../../assets/4.jpeg'
import AVTR3 from '../../assets/3.jpeg'
import AVTR4 from '../../assets/2.jpeg'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

// Import Swiper styles
import 'swiper/swiper.min.css';


const data = [
    {
        id: 1,
        Image: AVTR1,
        name: "asd asd",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis"
    },
    {
        id: 2,
        avatar: AVTR2,
        name: "asd asd",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis"
    },
    {
        id: 3,
        avatar: AVTR3,
        name: "asd asd",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis"
    },
    {
        id: 4,
        avatar: AVTR4,
        name: "asd asd",
        review: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis"
    },
]



const Testimonials = () => {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}>
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt="AVATAR" />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials