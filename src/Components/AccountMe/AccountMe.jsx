import React from "react";
import s from './AccountMe.module.scss'
import Header from "../Header/Header";
import {ReactComponent as Avatar} from "../../Common/img/Avatar.svg";
import {NavLink} from "react-router-dom";
import Citi from "../../Common/img/Main/PopularPlace/citi.png";
import {ReactComponent as Like} from '../../Common/img/like.svg';

const AccountMe = () => {
    return (
        <>
            <Header/>
            <div className={s.user}>
                <div className={s.user__description}>
                    <div className={s.user__ava}>
                        <Avatar/>
                    </div>
                    <div className={s.user__score}>
                        <p className={s.user__score__name}>Евгений Андреев</p>
                        <p className={s.user__score__drop}>Редактировать профиль</p>
                        <div className={s.user__score__el}>
                            <div>
                                <p>4/5</p>
                            </div>
                            <p>16 отзывов</p>
                        </div>
                        <p className={s.user__logout}>Выйти</p>
                    </div>
                    <div className={s.user__place}>
                        <p>Вы посетили</p>
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
                    <p>Места, которые вы можете показать</p>
                    <div className={s.user__img}>
                        <div className={s.user__img__score}>
                            <img src={Citi}/>
                            <Like/>
                            <div className={s.user__img__score__el}>
                                <p>Парк “Сокольники”</p>
                                <div className={s.user__img__score__el_mod+' '+s.bad}>
                                    <p>3/5</p>
                                </div>
                            </div>
                        </div>
                        <div className={s.user__img__score}>
                            <img src={Citi}/>
                            <Like/>
                            <div className={s.user__img__score__el}>
                                <p>Парк “Сокольники”</p>
                                <div className={s.user__img__score__el_mod}>
                                    <p>5/5</p>
                                </div>
                            </div>
                        </div>
                        <div className={s.user__img__score}>
                            <img src={Citi}/>
                            <Like/>
                            <div className={s.user__img__score__el}>
                                <p>Парк “Сокольники”</p>
                                <div className={s.user__img__score__el_mod}>
                                    <p>5/5</p>
                                </div>
                            </div>
                        </div>
                        <div className={s.user__img__score}>
                            <img src={Citi}/>
                            <Like/>
                            <div className={s.user__img__score__el}>
                                <p>Парк “Сокольники”</p>
                                <div className={s.user__img__score__el_mod}>
                                    <p>4/5</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className={s.user__addplace}>Добавить место</button>
                </div>
            </div>
        </>
    )
}

export default AccountMe