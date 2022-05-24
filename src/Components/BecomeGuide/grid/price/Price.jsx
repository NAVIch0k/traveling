import React, { useState } from 'react';

import s from './Price.module.scss'

const Price = () => {
    const [price, setPrice] = useState([
        {
            id: 0,
            text: '1000 рублей',
            active: false
        },
        {
            id: 1,
            text: '2000 рублей',
            active: false
        },
        {
            id: 2,
            text: '3000 рублей',
            active: false
        },
        {
            id: 3,
            text: '4000 рублей',
            active: false
        },
        {
            id: 4,
            text: '5000 рублей',
            active: false
        },
    ])

    const clickPrice = currentPrice => {
        setPrice(price.map((price, index) => {
            if (index === currentPrice){
                price.active = !price.active
            }
            else{
                price.active = false
            }
            return price
        }))
    }

    const result = price.map((current, index) => {
        return (
            <p className={current.active ? s.price__text + ' ' + s.price__active : s.price__text} 
            key={index}
            onClick={() => clickPrice(current.id)}>{current.text}</p>
        )
    })

    return (
        <div className={s.price}>
            <h2 className={s.price__title}>Определите стоимость</h2>
            <div className={s.price__list}>
                {result}
            </div>
            <input className={s.price__button} type="text" placeholder='1400' />
            <button className={s.price__becomeGuide}>Стать гидом</button>
        </div>
    );
};

export default Price;