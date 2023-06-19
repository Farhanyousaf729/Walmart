import React from "react";
import { useRef, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import Img1 from "../assets/pics/slideshow_1.jpg"
import Img2 from "../assets/pics/slideshow_2.jpg"
import Img3 from "../assets/pics/slideshow_3.jpg"
import Img4 from "../assets/pics/img3.jpg"
import Img5 from "../assets/pics/img4.jpg"
import Img6 from "../assets/pics/img5.jpg"
import Img7 from "../assets/pics/img6.jpg"
import { Navigation, Pagination, Scrollbar, A11y, EffectCube, EffectCoverflow, Keyboard, Autoplay } from 'swiper';
import 'swiper/css/bundle';

const Slider = () => {
   
    return (

        <Swiper
            className="mySwiper"
            modules={[Pagination, Scrollbar, Navigation, EffectCube, EffectCoverflow, Keyboard, Autoplay]}
            // spaceBetween={0}

            loop={true}
            slidesPerView={1}

            centeredSlides={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,

            }}
            navigation={true}
           
        >
            <SwiperSlide>
                <p className="text-6xl font_family animate-charcter">complete range of ice creams</p>
                <img src={Img3} />
            </SwiperSlide>

            <SwiperSlide>
                <p  className="text-6xl font_family animate-charcter">complete rage for women</p>
                <img src={Img6} />
            </SwiperSlide>

            <SwiperSlide >
                <p  className="text-6xl font_family animate-charcter">this is delecious choice</p>
                <img src={Img2} />
            </SwiperSlide>


            <SwiperSlide>
                <p  className="text-6xl font_family animate-charcter">your satisfication our worth</p>
                <img src={Img4} />
            </SwiperSlide>


            <SwiperSlide>
                <p className="text-6xl font_family animate-charcter">complete range of ice creams</p>
                <img src={Img3} />
            </SwiperSlide>


            <SwiperSlide>
                <p className="text-6xl font_family animate-charcter">chocolates for you</p>
                <img className="border" src={Img1} />
            </SwiperSlide>

        </Swiper>

    );
};
export default Slider