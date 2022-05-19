import React from 'react';

//  COMPONENTS
import Name from './name/Name';
import Lastname from './lastname/Lastname';
import Email from './email/Email';
import Description from './description/Description';
import Password from './password/Password';
import Button from './button/Button';
//  STYLES
import s from './Info.module.scss'

const Info = () => {
    return (
        <div className={s.info}>
            <Name />

            <Lastname />

            <Email />

            <Description />

            <Password />

            <Button />
        </div>
    );
};

export default Info;