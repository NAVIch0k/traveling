import React, { useState } from 'react';

//  img
import img from '../../assets/svg/infoAboutPlace/slider1.svg'

// Стили для блока с каруселью
import s from './Carousel.module.scss'

//  Стили для слайдера
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Сам слайдер
import Slider from 'react-slick/lib/slider';

const Carousel = () => {

    const [slider, setSlider] = useState('')

    //  Настройки слайдера
    const settings = {
        dots: true,
        arrows: false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: (dots) => (
            <div className={s.carousel__dots}>
                <ul className={s.carousel__dots}> {dots} </ul>
            </div>
        ),
        customPaging: (i) => <div className={s.carousel__dot}></div>,
    };

    return (
        <div className={s.carousel}>
            <button className={s.carousel__buttonLeft} onClick={() => slider.slickPrev()}></button>
            <Slider {...settings} ref={(c) => setSlider(c)}>
                <div>
                    <img className={s.carousel__img} src={img} />
                </div>
                <div>
                    <img className={s.carousel__img} src={img} />
                </div>
                <div>
                    <img className={s.carousel__img} src={img} />
                </div>
                <div>
                    <img className={s.carousel__img} src={img} />
                </div>
            </Slider>
            <button className={s.carousel__buttonRight} onClick={() => slider.slickNext()}></button>
        </div>
    );
};

export default Carousel;