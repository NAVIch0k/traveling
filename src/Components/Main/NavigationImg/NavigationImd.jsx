import React from "react";
import s from './NavigationImd.module.scss'
import {useHistory} from "react-router-dom";

const NavigationImd=()=>{

    let history=useHistory()

    let nav=(link)=>{
        history.push(link)
    }

    return(
        <div className={s.navigation}>
            <div className={s.navigation__city} onClick={()=>nav('/lifeciti')}><p>Жизнь города</p></div>
            <div className={s.navigation__park} onClick={()=>nav('/parks')}><p>Парки </p></div>
            <div className={s.navigation__attractions} onClick={()=>nav('/attractions')}><p>Достопримечательности</p></div>
        </div>
    )
}

export default NavigationImd