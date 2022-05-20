import React from 'react';

//  COMPONENTS
import Rating from './rating/Rating';
//  STYLE
import s from './Reviews.module.scss'

const Reviews = (props) => {

    function closeReviewPopup(event){
        event.preventDefault()
        props.setReviewPopup(false)
    }

    return (
        <form className={props.reviewPopup ? s.active + ' ' +s.reviews : s.reviews}>
                <button className={s.reviews__close}
                onClick={closeReviewPopup}></button>
            <div className={s.reviews__info}>
                <h2 className={s.reviews__title}>Оставьте отзыв о <span className={s.reviews__name}>Евгений Андреев</span></h2>
            </div>
            <textarea className={s.reviews__textarea} name="" id="" cols="30" rows="10" placeholder='Напишите отзыв (необязательно)...'></textarea>
            <Rating />
            <div className={s.reviews__button}>
                <button className={s.reviews__send}>Отправить</button>
                <p className={s.reviews__cancel}
                onClick={closeReviewPopup}>Отмена</p>
            </div>
        </form>
    );
};

export default Reviews;