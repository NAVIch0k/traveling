import React from 'react';

//  STYLES
import s from './Name.module.scss'

const Name = () => {
    return (
        <div className={s.name}>
                <h2 className={s.name__title}>Имя</h2>
                <input className={s.name__input} type="text" placeholder='Евгений' />
            </div>
    );
};

export default Name;