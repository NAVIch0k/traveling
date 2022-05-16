import React from 'react'
import s from './PopularPlace.module.scss'
import {ReactComponent as Like} from "../../../Common/img/like.svg";
import Kreml from '../../../Common/img/Main/PopularPlace/kreml.png'
import Citi from '../../../Common/img/Main/PopularPlace/citi.png'
import Vdnh from '../../../Common/img/Main/PopularPlace/vdnh.png'
import Park1 from '../../../Common/img/Main/PopularPlace/park.png'
import Park2 from '../../../Common/img/Main/PopularPlace/park2.png'
import Teatr from '../../../Common/img/Main/PopularPlace/teatr.png'

const PopularPlace = () => {
    return (
        <div className={s.popularPlace} id='popularplace'>
            <h1>Популярные места в Москве</h1>
            <div className={s.popularPlace__cont}>
                <div className={s.popularPlace__el}>
                    <img src={Kreml} alt={'kreml'}/>
                    <Like/>
                    <div className={s.popularPlace__name}>
                        <p>Московский кремль</p>
                        <div className={s.popularPlace__score}><p>4/5</p></div>
                    </div>
                </div>
                <div className={s.popularPlace__el}>
                    <img src={Citi} alt={'citi'}/>
                    <Like/>
                    <div className={s.popularPlace__name}>
                        <p>Бизнес-центр Москва-Сити</p>
                        <div className={s.popularPlace__score}><p>5/5</p></div>
                    </div>
                </div>
                <div className={s.popularPlace__el}>
                    <img src={Vdnh} alt={'vdnh'}/>
                    <Like/>
                    <div className={s.popularPlace__name}>
                        <p>ВДНХ</p>
                        <div className={s.popularPlace__score + ' ' + s.popularPlace__score_back}><p>3/5</p></div>
                    </div>
                </div>
                <div className={s.popularPlace__el}>
                    <img src={Park1} alt={'teatr'}/>
                    <Like/>
                    <div className={s.popularPlace__name}>
                        <p>Парк Горького</p>
                        <div className={s.popularPlace__score}><p>5/5</p></div>
                    </div>
                </div>
                <div className={s.popularPlace__el}>
                    <img src={Park2} alt={'teatr'}/>
                    <Like/>
                    <div className={s.popularPlace__name}>
                        <p>Парк “Царицыно”</p>
                        <div className={s.popularPlace__score}><p>4/5</p></div>
                    </div>
                </div>
                <div className={s.popularPlace__el}>
                    <img src={Teatr} alt={'teatr'}/>
                    <Like/>
                    <div className={s.popularPlace__name}>
                        <p>Большой театр</p>
                        <div className={s.popularPlace__score}><p>5/5</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularPlace