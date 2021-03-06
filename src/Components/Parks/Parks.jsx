import React from "react";
import Header from "../Header/Header";
import s from './Parks.module.scss'
import {ReactComponent as Like} from "../../Common/img/like.svg";
import Park from "../../Common/img/Main/PopularPlace/park.png"

const Parks = () => {
    return (
        <>
            <Header/>
            <div className={s.lifeciti}>
                <p>Здесь вы можете выбрать парк, в который хотите сходить</p>
                <div className={s.lifeciti__maps}>
                    <div className={s.lifeciti__map}>
                        <img src={Park} alt={'park'}/>
                        <Like/>
                        <div className={s.lifeciti__name}>
                            <p>ВДНХ</p>
                            <div className={s.lifeciti__score}><p>3/5</p></div>
                        </div>
                    </div>
                    <div className={s.lifeciti__map}>
                        <img src={Park} alt={'park'}/>
                        <Like/>
                        <div className={s.lifeciti__name}>
                            <p>ВДНХ</p>
                            <div className={s.lifeciti__score+' '+s.lifeciti__score_back}><p>3/5</p></div>
                        </div>
                    </div>
                    <div className={s.lifeciti__map}>
                        <img src={Park} alt={'park'}/>
                        <Like/>
                        <div className={s.lifeciti__name}>
                            <p>ВДНХ</p>
                            <div className={s.lifeciti__score}><p>3/5</p></div>
                        </div>
                    </div>
                    <div className={s.lifeciti__map}>
                        <img src={Park} alt={'park'}/>
                        <Like/>
                        <div className={s.lifeciti__name}>
                            <p>ВДНХ</p>
                            <div className={s.lifeciti__score}><p>3/5</p></div>
                        </div>
                    </div>
                    <div className={s.lifeciti__map}>
                        <img src={Park} alt={'park'}/>
                        <Like/>
                        <div className={s.lifeciti__name}>
                            <p>ВДНХ</p>
                            <div className={s.lifeciti__score}><p>3/5</p></div>
                        </div>
                    </div>
                    <div className={s.lifeciti__map}>
                        <img src={Park} alt={'park'}/>
                        <Like/>
                        <div className={s.lifeciti__name}>
                            <p>ВДНХ</p>
                            <div className={s.lifeciti__score}><p>3/5</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Parks