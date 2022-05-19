import React from 'react';

//  STYLES
import s from './Email.module.scss'

const Email = () => {
    return (
        <div className={s.email}>
            <h2 className={s.email__title}>Электронная почта</h2>
            <input className={s.email__input} type="text" placeholder='evgeniy@mail.com' />
        </div>
    );
};

export default Email;