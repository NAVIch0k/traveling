import React from 'react';

import s from './Time.module.scss'
const Time = () => {
    return (
        <div className={s.time}>
            <h2 className={s.time__title}>Когда идем?</h2>
            <p className={s.time__date}>2022.04.05</p>
        </div>
    );
};

export default Time;