import React from 'react';

//  COMPONENTS
import Avatar from './avatar/Avatar';
import Form from './form/Form';
//  STYLES
import s from './EditProfile.module.scss'

const EditProfile = (props) => {
    return (
        <div className={props.editPopUp?s.editProfile+' '+s.active:s.editProfile}>
            <button className={s.editProfile__close} onClick={()=>props.setEditPopUp(false)}></button>
            <div className={s.editProfile__info}>
                <Avatar />
                <Form />
            </div>
        </div>
    );
};

export default EditProfile;