import React from "react";
import Header from "../Header/Header";
import s from './LifeCiti.module.scss'
import {ReactComponent as Like} from "../../Common/img/like.svg";

const LifeCiti = () => {
    return (
        <>
            <Header/>
            <div className={s.lifeciti}>
                <p>Здесь вы можете выбрать куда сходить и посмотреть жизнь города</p>
                <div className={s.lifeciti__maps}>
                    <div className={s.lifeciti__map}>
                        <Like/>
                        <div className={s.lifeciti__name}>
                            <p>ВДНХ</p>
                            <div className={s.lifeciti__score}><p>3/5</p></div>
                        </div>
                    </div>
                    <div className={s.lifeciti__map}>
                        <Like/>
                        <div className={s.lifeciti__name}>
                            <p>ВДНХ</p>
                            <div className={s.lifeciti__score+' '+s.lifeciti__score_back}><p>3/5</p></div>
                        </div>
                    </div>
                    <div className={s.lifeciti__map}>
                        <Like/>
                        <div className={s.lifeciti__name}>
                            <p>ВДНХ</p>
                            <div className={s.lifeciti__score}><p>3/5</p></div>
                        </div>
                    </div>
                    <div className={s.lifeciti__map}>
                        <Like/>
                        <div className={s.lifeciti__name}>
                            <p>ВДНХ</p>
                            <div className={s.lifeciti__score}><p>3/5</p></div>
                        </div>
                    </div>
                    <div className={s.lifeciti__map}>
                        <Like/>
                        <div className={s.lifeciti__name}>
                            <p>ВДНХ</p>
                            <div className={s.lifeciti__score}><p>3/5</p></div>
                        </div>
                    </div>
                    <div className={s.lifeciti__map}>
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

export default LifeCiti