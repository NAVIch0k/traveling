import React from 'react';
import {Field, reduxForm} from "redux-form";
import s from './LogIn.module.scss'
import {Form_control} from "../../Common/Forms_control/Forms_controls";
import {NavLink} from "react-router-dom";

const Input =Form_control('input')
export const Registration_form = (props) => {
    return (
        <div className={s.registration}>
            <header className={s.registration__header}>Loctravel</header>
            <form className={s.registration__form}>
                <h2 className={s.registration__title}>Авторизация</h2>
                <Field className={s.registration__input} name={'email'} type={'email'} component={Input} placeholder={'Электропочта'}/>
                <Field className={s.registration__input} name={'password'} type={'password'} component={Input} placeholder={'Пароль'}/>
                <button className={s.registration__button}>Войти</button>
                <NavLink to={'/registration'}>Зарегистрироваться</NavLink>
            </form>
        </div>
    );
};

const LogIn=reduxForm({form:'login'})(Registration_form)

export default  LogIn
