import React, { useState } from 'react';

//  STYLE
import s from './RatePlace.module.scss'

const RatePlace = () => {
    const [rates, setRates] = useState([
        {
            id: 0,
            number: '1',
            active: false
        },
        {
            id: 1,
            number: '2',
            active: false
        },
        {
            id: 2,
            number: '3',
            active: false
        },
        {
            id: 3,
            number: '4',
            active: false
        },
        {
            id: 4,
            number: '5',
            active: false
        }
    ])

    const clickRate = index => {
        setRates(rates.map((rate, i) => {
            if (index  === i) {
                rate.active = !rate.active
            }
            else {
                rate.active = false
            }

            return rate
        }))
    }

    const result = rates.map((current, index) => {
        return (
            <p className={current.active ? s.number + ' ' + s.number__active : s.number}
                onClick={() => clickRate(current.id)}
                key={index}>{current.number}</p>
        )
    })

    return (
        <div className={s.ratePlace}>
            <div className={s.ratePlace__info}>
                <h2 className={s.ratePlace__title}>Поставьте оценку месту</h2>
                <button className={s.ratePlace__close}></button>
                <div className={s.ratePlace__list}>
                    {result}
                </div>
            </div>
            <div className={s.ratePlace__button}>
                <button className={s.ratePlace__ready}>Готово</button>
                <p className={s.ratePlace__cancel}>Отмена</p>
            </div>
        </div>
    );
};

export default RatePlace;