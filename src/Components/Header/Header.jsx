import React from "react";
import s from './Header.module.scss'
import {NavLink, useHistory} from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {

    let {l_name,photo_path}=useSelector(state => state.user)

    let history = useHistory()

    let main = () => {
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
                <a href={'#popularplace'}>Популярные места</a>
                <NavLink to={'/becomeGuide'}>Стать гидом</NavLink>
                <NavLink to={'#'}>Избранное</NavLink>
                <NavLink to={'/userme'}>{l_name}</NavLink>
                <NavLink to={'/userme'}><img src={`http://188.225.83.101/api/static/img/${photo_path}`}/></NavLink>
            </nav>
        </div>
    )
}

export default Header