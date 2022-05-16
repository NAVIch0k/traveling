import React from "react";
import s from './NavigationImd.module.scss'
import {useHistory} from "react-router-dom";
import Citi from "../../../Common/img/Main/city.png"
import Park from "../../../Common/img/Main/park.png"
import Attractions from "../../../Common/img/Main/attractions.png"

const NavigationImd=()=>{

    let history=useHistory()

    let nav=(link)=>{
        history.push(link)
    }

    return(
        <div className={s.navigation}>
            <div className={s.navigation__el} onClick={()=>nav('/lifeciti')}>
                <img src={Citi} alt={'citi'}/>
                <p>Жизнь города</p>
            </div>
            <div className={s.navigation__el} onClick={()=>nav('/parks')}>
                <img src={Park} alt={'park'}/>
                <p>Парки </p>
            </div>
            <div className={s.navigation__el} onClick={()=>nav('/attractions')}>
                <img src={Attractions} alt={'attractions'}/>
                <p>Достопримечательности</p>
            </div>
        </div>
    )
}

export default NavigationImd