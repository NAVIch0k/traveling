import React from 'react'
import s from './PopularPlace.module.scss'
import {ReactComponent as Like} from "../../../Common/img/like.svg";

const PopularPlace=()=>{
    return(
        <div className={s.popularPlace}>
            <h1>Популярные места в Москве</h1>
            <div className={s.popularPlace__cont}>
                <div className={s.popularPlace__kreml}>
                    <Like/>
                    <div className={s.popularPlace__name}>
                        <p>Московский кремль</p>
                        <div className={s.popularPlace__score}><p>4/5</p></div>
                    </div>
                </div>
                <div className={s.popularPlace__citi}>
                    <Like/>
                    <div className={s.popularPlace__name}>
                        <p>Бизнес-центр Москва-Сити</p>
                        <div className={s.popularPlace__score}><p>5/5</p></div>
                    </div>
                </div>
                <div className={s.popularPlace__vdnhl}>
                    <Like/>
                    <div className={s.popularPlace__name}>
                        <p>ВДНХ</p>
                        <div className={s.popularPlace__score+' '+s.popularPlace__score_back}><p>3/5</p></div>
                    </div>
                </div>
                <div className={s.popularPlace__park1}>
                    <Like/>
                    <div className={s.popularPlace__name}>
                        <p>Парк Горького</p>
                        <div className={s.popularPlace__score}><p>5/5</p></div>
                    </div>
                </div>
                <div className={s.popularPlace__park2}>
                    <Like/>
                    <div className={s.popularPlace__name}>
                        <p>Парк “Царицыно”</p>
                        <div className={s.popularPlace__score}><p>4/5</p></div>
                    </div>
                </div>
                <div className={s.popularPlace__teatr}>
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