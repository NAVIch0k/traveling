import React from 'react';

//  STYLES
import s from './Info.module.scss'
const Info = () => {
    return (
        <div className={s.info}>
            <div className={s.info__name + ' ' + s.info__block}>
                <h2 className={s.info__title}>Имя</h2>
                <input className={s.info__input} type="text" placeholder='Евгений' />
            </div>

            <div className={s.info__lastName + ' ' + s.info__block}>
                <h2 className={s.info__title}>Фамилия</h2>
                <input className={s.info__input} type="text" placeholder='Андреев' />
            </div>

            <div className={s.info__email + ' ' + s.info__block}>
                <h2 className={s.info__title}>Электронная почта</h2>
                <input className={s.info__input} type="text" placeholder='evgeniy@mail.com' />
            </div>

            <div className={s.info__description}>
                <h2 className={s.info__text}>Описание</h2>
                <p className={s.info__paragraf}>Привет! Меня зовут Женя, и я помогу тебе по-лучше свой родной город - Москву. Я живу здесь давно и поэтому знаю много об этом городе. Лучшие места, где можно поесть. Места для прогулок и отдыха, где тихо и красиво. И вообще много чего. Поэтому пишите и я покажу вам Москву такой, какой она является для коренного жителя.</p>
            </div>

            <div className={s.info__password + ' ' + s.info__block}>
                <h2 className={s.info__title}>Обновление пароля</h2>
                <input className={s.info__input} type="password" placeholder='Текущий пароль' />
                <input className={s.info__input} type="password" placeholder='Новый пароль' />
            </div>

            <div className={s.info__button}>
                <button className={s.info__save}>Сохранить изменения</button>
                <p className={s.info__cancel}>Отмена</p>
            </div>
        </div>
    );
};

export default Info;