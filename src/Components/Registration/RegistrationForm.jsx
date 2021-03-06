import React from 'react';
import {Field, reduxForm} from "redux-form";
import s from './Registration.module.scss'
import {Form_control} from "../../Common/Forms_control/Forms_controls";
import {NavLink} from "react-router-dom";

const Input =Form_control('input')
const Registration_form = (props) => {

    return (
        <div className={s.registration}>
            <header className={s.registration__header}>Loctravel</header>
            <form className={s.registration__form} onSubmit={props.handleSubmit}>
                <h2 className={s.registration__title}>Регистрация</h2>
                <Field className={s.registration__input} name={'f_name'} type={'text'} component={Input} placeholder={'Имя'}/>
                <Field className={s.registration__input} name={'l_name'} type={'text'} component={Input} placeholder={'Фамилия'}/>
                <Field className={s.registration__input} name={'email'} type={'email'} component={Input} placeholder={'Электропочта'}/>
                <Field className={s.registration__input} name={'password'} type={'password'} component={Input} placeholder={'Пароль'}/>
                <button className={s.registration__button}>Зарегистрироваться</button>
                <NavLink to={'/login'}>Войти</NavLink>
            </form>
        </div>
    );
};

const RegistrationForm=reduxForm({form:'registration'})(Registration_form)

export default  RegistrationForm
