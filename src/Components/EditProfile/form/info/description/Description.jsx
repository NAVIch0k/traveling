import React from 'react';

//  STYLES
import s from './Description.module.scss'
const Description = () => {
    return (
        <div className={s.description}>
            <h2 className={s.description__text}>Описание</h2>
            <p className={s.description__paragraf}>Привет! Меня зовут Женя, и я помогу тебе по-лучше свой родной город - Москву. Я живу здесь давно и поэтому знаю много об этом городе. Лучшие места, где можно поесть. Места для прогулок и отдыха, где тихо и красиво. И вообще много чего. Поэтому пишите и я покажу вам Москву такой, какой она является для коренного жителя.</p>
        </div>
    );
};

export default Description;