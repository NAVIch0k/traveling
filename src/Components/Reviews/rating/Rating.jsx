import React, { useState } from 'react';

//  STYLE
import s from './Rating.module.scss'

const Rating = () => {

    const [ratings, setRatings] = useState([
        {
            id: 0,
            rating: '1',
            active: false
        },
        {
            id: 1,
            rating: '2',
            active: false
        },
        {
            id: 2,
            rating: '3',
            active: false
        },
        {
            id: 3,
            rating: '4',
            active: false
        },
        {
            id: 4,
            rating: '5',
            active: false
        },
    ])

    const clickRating = index => {
        setRatings(ratings.map((rating, i) => {
            if (index === i) {
                rating.active = !rating.active
            }
            else {
                rating.active = false
            }

            return rating
        }))
    }

    const result = ratings.map((rating, index) => {
        return (
            <p className={rating.active ? s.number + ' ' + s.number__active : s.number + ' ' + s.number__default}
                key={index}
                onClick={() => clickRating(rating.id)}>{rating.rating}</p>
        )
    })


    return (
        <div className={s.rating}>
            <h2 className={s.rating__title}>Поставьте оценку</h2>
            <div className={s.rating__list}>
                {result}
            </div>
        </div>
    );
};

export default Rating;