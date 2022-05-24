import React from 'react';

// STYLE
import s from './Button.module.scss'

const Button = () => {
    return (
        <div className={s.button}>
                <button className={s.button__order}>Заказать экскурсию</button>
                <p className={s.button__cancel}>Отмена</p>
            </div>
    );
};

export default Button;