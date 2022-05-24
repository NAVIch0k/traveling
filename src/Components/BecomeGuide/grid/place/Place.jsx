import React, { useState } from 'react';

// STYLE
import s from './Place.module.scss'

const Place = () => {

    const [place, setPlace] = useState([
        {
            id: 0,
            text: 'Центральный район',
            active: false
        },
        {
            id: 1,
            text: 'Замоскворечье',
            active: false
        },
        {
            id: 2,
            text: 'Центральный район',
            active: false
        },
        {
            id: 3,
            text: 'Замоскворечье',
            active: false
        },
        {
            id: 4,
            text: 'Центральный район',
            active: false
        },
        {
            id: 5,
            text: 'Замоскворечье',
            active: false
        },
        {
            id: 6,
            text: 'Центральный район',
            active: false
        },
        {
            id: 7,
            text: 'Замоскворечье',
            active: false
        },
        {
            id:8,
            text: 'Замоскворечье',
            active: false
        },
        {
            id:9,
            text: 'Замоскворечье',
            active: false
        },
        {
            id:10,
            text: 'Замоскворечье',
            active: false
        },
        {
            id:11,
            text: 'Замоскворечье',
            active: false
        },
        {
            id:12,
            text: 'Замоскворечье',
            active: false
        },
        {
            id:13,
            text: 'Замоскворечье',
            active: false
        },
        {
            id:14,
            text: 'Центральный район',
            active: false
        },
        {
            id:15,
            text: 'Замоскворечье',
            active: false
        },
        {
            id:16,
            text: 'Замоскворечье',
            active: false
        },
        {
            id:17,
            text: 'Замоскворечье',
            active: false
        },
        {
            id:18,
            text: 'Замоскворечье',
            active: false
        },
        {
            id:19,
            text: 'Замоскворечье',
            active: false
        },
        {
            id:20,
            text: 'Замоскворечье',
            active: false
        },
        {
            id:21,
            text: 'Центральный район',
            active: false
        },
        {
            id:22,
            text: 'Замоскворечье',
            active: false
        },
        {
            id:23,
            text: 'Замоскворечье',
            active: false
        },
    ])


    const clickPlace = currentPlace =>{
        setPlace(place.map((current, index) => {
            if(currentPlace === index){
                current.active = !current.active
            }
            else{
                current.active = false;
            }
            return current
        }))
    }

    const result = place.map((current, index) => {
        return (
            <p className={current.active ? s.place__text + ' ' + s.place__active : s.place__text} 
            key={index}
            onClick={() => clickPlace(current.id)}>{current.text}</p>
        )
    })
    return (
        <div className={s.place}>
            <h2 className={s.place__title}>Выберите место</h2>
            <div className={s.place__list}>
                {result}
            </div>
            <p className={s.place__showmore}>Показать больше</p>
            <input className={s.place__button} type="text" placeholder='Напишите свой вариант' />
        </div>
    );
};

export default Place;