import React from "react";
import s from './NavigationImd.module.scss'

const NavigationImd=()=>{
    return(
        <div className={s.navigation}>
            <div className={s.navigation__city}><p>Жизнь города</p></div>
            <div className={s.navigation__park}><p>Парки </p></div>
            <div className={s.navigation__attractions}><p>Достопримечательности</p></div>
        </div>
    )
}

export default NavigationImd