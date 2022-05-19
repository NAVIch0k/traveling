import React from 'react';

//  COMPONENTS
import Rating from './rating/Rating';
//  STYLE
import s from './Reviews.module.scss'

const Reviews = (props) => {
    return (
        <div className={props.reviewPopup ? s.active + ' ' +s.reviews : s.reviews}>
                <button className={s.reviews__close}
                onClick={() => props.setReviewPopup(false)}></button>
            <div className={s.reviews__info}>
                <h2 className={s.reviews__title}>Оставьте отзыв о <span className={s.reviews__name}>Евгений Андреев</span></h2>
            </div>
            <textarea className={s.reviews__textarea} name="" id="" cols="30" rows="10" placeholder='Напишите отзыв (необязательно)...'></textarea>
            <Rating />
            <div className={s.reviews__button}>
                <button className={s.reviews__send}>Отправить</button>
                <p className={s.reviews__cancel}>Отмена</p>
            </div>
        </div>
    );
};

export default Reviews;