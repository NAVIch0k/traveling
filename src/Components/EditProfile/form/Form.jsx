import React from 'react';

//  COMPONENTS
import Info from './info/Info';
//  STYLES
import s from './Form.module.scss'

const Form = () => {
    return (
        <div className={s.form}>
            <Info />
        </div>
    );
};

export default Form;