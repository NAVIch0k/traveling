import React from "react";
import s from './Itineraries.module.scss'
import Header from "../Header/Header";

const Itineraries = () => {
    return (
        <>
            <Header/>
            <div className={s.itinerary}>
                <p>Здесь вы можете выбрать, какие достопримечательности хотите посмотреть</p>
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
            </div>
        </>
    )
}

export default Itineraries