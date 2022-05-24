import React from 'react';

// IMG
import img1 from '../../assets/svg/visit/gid_1.svg'
import img2 from '../../assets/svg/visit/gid_2.svg'
import img3 from '../../assets/svg/visit/gid_3.svg'
//  STYLE 
import s from './Grid.module.scss'

const Grid = () => {

    const info = [
        {
            img: `${img1}`,
            name: 'Евгений',
            rating: '4/5',
            price: 'от 2400р',
            text: 'Пойду с ним'
        },
        {
            img: `${img2}`,
            name: 'Дмитрий',
            rating: '5/5',
            price: 'от 2600р',
            text: 'Пойду с ним'
        },
        {
            img: `${img3}`,
            name: 'Петр',
            rating: '5/5',
            price: 'от 3200р',
            text: 'Пойду с ним'
        }
    ]

    const infoGid = info.map((current, index) => {
        return (
            <div className={s.grid__info} key={index}>
                <img className={s.grid__img} src={current.img} alt="" />
                <p className={s.grid__name}>{current.name}</p>
                <p className={s.grid__rating}>{current.rating}</p>
                <p className={s.grid__price}> {current.price}</p>
                <p className={s.grid__text}>{current.text}</p>
            </div>
        )
    })
    return (
        <div className={s.grid}>
            <h2 className={s.grid__title}>Выберите гида</h2>
            <div className={s.grid__list}>
                {infoGid}
            </div>
        </div>
    );
};

export default Grid;