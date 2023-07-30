import style from "./Header.module.css"
import logo from "../../music-store-logo.png"
import { NavLink } from "react-router-dom"

export default function Header() {


    return <header className={style.main_header}>
        <img src={logo} className={style.music_store_logo} alt="logo" />

        <nav>
            <NavLink
                to={"/catalog/accordions"}
                className={style.nav_button}
                activeclassname="active"
            >Accordions</NavLink >

            <NavLink
                to={"/catalog/keyboards"}
                className={style.nav_button}
                activeclassname="active"
            >Keyboards</NavLink >

            <NavLink
                to={"/catalog/synthesizers"}
                className={style.nav_button}
                activeclassname="active"
            >Synthesizers</NavLink >
        </nav>

        <div className={style.cart}>
            <i class={`fa-solid fa-cart-shopping ${style.cart_icon}`}></i>

            <p className={style.items_in_cart_count}>0</p>
        </div>
    </header>
}