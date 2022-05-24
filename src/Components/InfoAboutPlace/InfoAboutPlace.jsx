import React from 'react'
import Header from "../Header/Header";
import s from './InfoAboutPlace.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as Avatar } from "../../Common/img/Avatar.svg";

//  COMPONENTS
import Slider from './Slider/Carousel';

const InfoAboutPlace = () => {

    return (<>
        <Header />
        <div className={s.about}>
            <div className={s.about__name}>
                <div className={s.about__name__header}>
                    <p>Парк Горького</p>
                    <p>Хочу посетить</p>
                </div>
                <div className={s.about__score}>
                    <div className={s.about__score__comment}>
                        <p>826 отзывов</p>
                        <p>4/5</p>
                    </div>
                    <p>Оставить отзыв</p>
                </div>
            </div>
        </div>

        <Slider />

        <div className={s.description}>
            <div className={s.description__text}>
                <div>
                    <h1>Парк Горького</h1>
                    <p>Центральный парк культуры и отдыха имени Максима Горького (сокращённо ЦПКиО или парк Горького,
                        международное название — англ. Gorky Park) — московский парк культуры и отдыха, столичная
                        рекреационная зона, одна из самых больших и популярных в городе.

                        Партерная часть парка появилась в 1923 году после организации на месте свалки Орловского луга
                        Всероссийской сельскохозяйственной выставки (ВСХВ), планировку которой от входа до Нескучного
                        сада выполнил архитектор-авангардист Константин Мельников. ЦПКиО был открыт 12 августа 1928
                        года, в 1932-м парку присвоили имя писателя Максима Горького. В разное время проектировкой парка
                        занимались Эль Лисицкий и Александр Власов. Арка главного входа возведена в 1955 году по проекту
                        архитектора Георгия Щуко.</p>
                </div>
                <div className={s.description__text__place}>
                    <p>В парке Горького есть</p>
                    <ul>
                        <li>Фудкорт</li>
                        <li>Набережная</li>
                        <li>Пруды</li>
                        <li>Пляжная зона</li>
                        <li>Велодорожки</li>
                        <li>Прокат велосипедов/самокатов</li>
                    </ul>
                </div>
            </div>
            <div className={s.description__text__people}>
                <div className={s.description__text__people__block}>
                    <p>Это место вам могут показать</p>
                    <div className={s.description__text__people__block__el}>
                        <Avatar />
                        <p>Евгений</p>
                        <div>4/5</div>
                        <p>от 2400р.</p>
                    </div>
                    <div className={s.description__text__people__block__el}>
                        <Avatar />
                        <p>Евгений</p>
                        <div>4/5</div>
                        <p>от 2400р.</p>
                    </div>
                    <div className={s.description__text__people__block__el}>
                        <Avatar />
                        <p>Евгений</p>
                        <div>4/5</div>
                        <p>от 2400р.</p>
                    </div>
                </div>
                <button>Хочу посетить</button>
            </div>
            <div className={s.reviews}>
                <div className={s.reviews__header}>
                    <p>Отзывы об этом месте</p>
                    <div>4/5</div>
                </div>
                <div className={s.reviews__el}>
                    <Avatar />
                    <div className={s.reviews__el__text}>
                        <div className={s.reviews__el__name}>
                            <p>Антон поставил</p>
                            <p>4/5</p>
                        </div>
                        <p>Место действительно интересное, хотелось бы сходить еще раз. Спасибо моему гиду Артему -
                            показал самые красивые места этого парка и дал возможность максимально прочувствовать
                            исторические места района.</p>
                    </div>
                </div>
                <div className={s.reviews__el}>
                    <Avatar />
                    <div className={s.reviews__el__text}>
                        <div className={s.reviews__el__name}>
                            <p>Антон поставил</p>
                            <p>4/5</p>
                        </div>
                        <p>Место действительно интересное, хотелось бы сходить еще раз. Спасибо моему гиду Артему -
                            показал самые красивые места этого парка и дал возможность максимально прочувствовать
                            исторические места района.</p>
                    </div>
                </div>
                <div className={s.reviews__el}>
                    <Avatar />
                    <div className={s.reviews__el__text}>
                        <div className={s.reviews__el__name}>
                            <p>Антон поставил</p>
                            <p>4/5</p>
                        </div>
                        <p>Место действительно интересное, хотелось бы сходить еще раз. Спасибо моему гиду Артему -
                            показал самые красивые места этого парка и дал возможность максимально прочувствовать
                            исторические места района.</p>
                    </div>
                </div>
                <div className={s.reviews__send}>
                    <textarea type="text" placeholder={'Напишите отзыв'} />
                    <button>Отправить</button>
                </div>
            </div>
        </div>
    </>)
}

export default InfoAboutPlace