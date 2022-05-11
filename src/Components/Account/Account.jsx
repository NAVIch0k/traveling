import React from "react";
import s from './Account.module.scss'
import Header from "../Header/Header";
import {ReactComponent as Avatar} from "../../Common/img/Avatar.svg";
import {NavLink} from "react-router-dom";
import Citi from "../../Common/img/Main/PopularPlace/citi.png";

const Account = () => {
    return (
        <>
            <Header/>
            <div className={s.user}>
                <div className={s.user__description}>
                    <div className={s.user__ava}>
                        <Avatar/>
                        <p>Написать</p>
                    </div>
                    <div className={s.user__score}>
                        <p className={s.user__score__name}>Евгений Андреев</p>
                        <p className={s.user__score__drop}>Оставить отзыв</p>
                        <div className={s.user__score__el}>
                            <div>
                                <p>4/5</p>
                            </div>
                            <p>16 отзывов</p>
                        </div>
                    </div>
                    <div className={s.user__place}>
                        <p>Посещения</p>
                        <NavLink to={'#'}>Московский кремль</NavLink>
                        <NavLink to={'#'}>Парк Горького</NavLink>
                        <NavLink to={'#'}>Парк “Сокольники”</NavLink>
                        <NavLink to={'#'}>Измайловский кремль</NavLink>
                        <NavLink to={'#'}>Филевский парк</NavLink>
                        <NavLink to={'#'}>Парк “Царицыно”</NavLink>
                    </div>
                    <div className={s.user__self}>
                        <p>Описание</p>
                        <p>Привет! Меня зовут Женя, и я помогу тебе по-лучше свой родной город - Москву. Я живу здесь
                            давно и поэтому знаю много об этом городе. Лучшие места, где можно поесть. Места для
                            прогулок и отдыха, где тихо и красиво. И вообще много чего. Поэтому пишите и я покажу вам
                            Москву такой, какой она является для коренного жителя.</p>
                    </div>
                </div>
                <div className={s.user__placeimg}>
                    <p>Может показать эти места</p>
                    <div className={s.user__img}>
                        <div>
                            <img src={Citi}/>
                            <div className={s.user__img__score}>
                                <p>Парк “Сокольники”</p>
                                <div>
                                    <p>3/5</p>
                                </div>
                            </div>
                        </div>
                        <div><img src={Citi}/></div>
                        <div><img src={Citi}/></div>
                        <div><img src={Citi}/></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Account