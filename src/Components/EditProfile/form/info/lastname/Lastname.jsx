import React from 'react';

//  STYLES
import s from './Lastname.module.scss'

const Lastname = () => {
    return (
        <div className={s.lastName}>
                <h2 className={s.lastName__title}>Фамилия</h2>
                <input className={s.lastName__input} type="text" placeholder='Андреев' />
            </div>
    );
};

export default Lastname;