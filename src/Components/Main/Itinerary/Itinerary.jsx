import React from "react";
import s from './Itinerary.module.scss'
import {NavLink} from "react-router-dom";

const Itinerary = () => {
    return (
        <div className={s.itinerary}>
            <h1>Автобусные маршруты</h1>
            <div className={s.itinerary__maps}>
                <div className={s.itinerary__map}>
                    <div className={s.itinerary__when}>
                        <p>Лубянская площадь</p>
                        <p>ГЭС-2</p>
                    </div>
                    <div className={s.itinerary__lubanka}></div>
                </div>
                <div className={s.itinerary__map}>
                    <div className={s.itinerary__when}>
                        <p>Новый Арбат</p>
                        <p>Парк Победы</p>
                    </div>
                    <div className={s.itinerary__arbat}></div>
                </div>
            </div>
            <NavLink to={'/itineraries'} className={s.itinerary__more}>Больше автобусных маршрутов</NavLink>
        </div>
    )
}

export default Itinerary