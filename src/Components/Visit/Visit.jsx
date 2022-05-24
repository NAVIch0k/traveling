import React from 'react';

// COMPONENTS
import Time from './time/Time';
import Button from './button/Button';
import Grid from './grid/Grid';
// STYLE
import s from './Visit.module.scss'

const Visit = () => {
    return (
        <div className={s.visit}>
            <h2 className={s.visit__header}>Запись на экскурсию</h2>
            <button className={s.visit__close}></button>

            <Time />

            <Grid />

            <Button />
        </div>
    );
};

export default Visit;