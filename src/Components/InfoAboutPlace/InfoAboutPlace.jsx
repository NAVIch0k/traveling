import React from 'react'
import Header from "../Header/Header";
import s from './InfoAboutPlace.module.scss'
import Park1 from '../../Common/img/Park/park1.jpg'
import SimpleImageSlider from "react-simple-image-slider";

const InfoAboutPlace = () => {

    let images=[
        {url:Park1},
        {url:Park1},
        {url:Park1},
    ]

    return (
        <>
            <Header/>
            <div className={s.about}>
                <div className={s.about__name}>
                    <div className={s.about__name__header}>
                        <p>Парк Горького</p>
                        <p>Хочу посетить</p>
                    </div>
                    <div className={s.about__score}>
                        <div className={s.about__score__comment}>
                            <p>826 отзывов</p>
                            <p>4/5</p>
                        </div>
                        <p>Оставить отзыв</p>
                    </div>
                </div>
            </div>
            <SimpleImageSlider
                width={'100%'}
                height={803}
                images={images}
                showBullets={true}
                showNavs={true}
            />
            <div></div>
        </>
    )
}

export default InfoAboutPlace