import React from 'react';

// STYLES
import s from './Password.module.scss'

const Password = () => {
    return (
        <div className={s.password}>
            <h2 className={s.password__title}>Обновление пароля</h2>
            <input className={s.password__input} type="password" placeholder='Текущий пароль' />
            <input className={s.password__input} type="password" placeholder='Новый пароль' />
        </div>
    );
};

export default Password;