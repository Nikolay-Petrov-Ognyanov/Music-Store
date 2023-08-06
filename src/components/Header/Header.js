import style from "./Header.module.css"

import { NavLink } from "react-router-dom"

import logo from "../../music-store-logo.png"
import scrollToTop from "../../utility/scrollToTop"

export default function Header() {
    return <header className={style.header}>
        <nav className={style.nav}>
            <div className={style.logo_wrapper} >
                <img src={logo} className={style.logo} alt="logo" />

                <span className={style.music_store}>MUSIC STORE</span>
            </div>

            <NavLink
                to={"/catalog/accordions"}
                onClick={scrollToTop}
                className={style.button}
                activeclassname="active"
            >Accordions</NavLink >

            <NavLink
                to={"/catalog/keyboards"}
                onClick={scrollToTop}
                className={style.button}
                activeclassname="active"
            >Keyboards</NavLink >

            <NavLink
                to={"/catalog/synthesizers"}
                onClick={scrollToTop}
                className={style.button}
                activeclassname="active"
            >Synthesizers</NavLink >
        </nav>
    </header>
}