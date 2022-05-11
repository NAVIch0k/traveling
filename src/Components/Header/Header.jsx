import React from "react";
import {ReactComponent as Avatar} from "../../Common/img/Avatar.svg";
import s from './Header.module.scss'
import {NavLink, useHistory} from "react-router-dom";

const Header = () => {

    let history=useHistory()

    let main=()=>{
        history.push('/main')
    }

    return (
        <div className={s.header}>
            <div className={s.header__search}>
                <p onClick={main}>Loctravel</p>
                <form className={s.header__search__el}>
                    <input type="text" placeholder='Выбираем место...'/>
                    <button></button>
                </form>
            </div>
            <nav className={s.header__nav}>
                <NavLink to={'/main'}>Главная</NavLink>
                <NavLink to={'#'}>Популярные места</NavLink>
                <NavLink to={'#'}>Стать гидом</NavLink>
                <NavLink to={'#'}>Избранное</NavLink>
                <NavLink to={'#'}>Евгений</NavLink>
                <Avatar/>
            </nav>
        </div>
    )
}

export default Header