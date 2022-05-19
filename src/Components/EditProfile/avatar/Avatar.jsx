import React from 'react';

//  IMG
import ava from '../../assets/svg/editProfile/ava.svg'
//  STYLES
import s from './Avatar.module.scss'

const Avatar = () => {
    return (
        <div className={s.Avatar}>
            <img className={s.Avatar__img} src={ava} alt="" />
            <p className={s.Avatar__text}>Изменить фото</p>
        </div>
    );
};

export default Avatar;