import React from 'react';

// STYLES
import s from './Button.module.scss'

const Button = () => {
    return (
        <div className={s.button}>
            <button className={s.button__save}>Сохранить изменения</button>
            <p className={s.button__cancel}>Отмена</p>
        </div>
    );
};

export default Button;