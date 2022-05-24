import React, { useState } from 'react';

import s from './Category.module.scss'

const Category = () => {
    const [category, setCategory] = useState(
        [
            {
                id: 0,
                place: 'Парки',
                active: false
            },
            {
                id: 1,
                place: 'Жизнь города',
                active: false
            },
            {
                id: 2,
                place: 'Культурные места',
                active: false
            },
            {
                id: 3,
                place: 'Достопримечательности',
                active: false
            }
        ]
    )

    const clickCategory = currentCategory => {
        setCategory(category.map((current, index) => {
            if (currentCategory === index){
                current.active = !current.active
            }
            else{
                current.active = false
            }
            return current
        }))
    }

    const result = category.map((current, index) => {
        return (
            <p className={current.active ? s.category__text + ' ' + s.category__active : s.category__text}
                key={index}
                onClick={() => clickCategory(current.id)}>{current.place}</p>
        )
    })

    return (
        <div className={s.category}>
            <h2 className={s.category__title}>Категория</h2>
            <div className={s.category__list}>
                {result}
            </div>
        </div>
    );
};

export default Category;