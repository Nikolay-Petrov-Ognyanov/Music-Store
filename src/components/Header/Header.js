import style from "./Header.module.css"
import logo from "../../music-store-logo.png"
import { NavLink } from "react-router-dom"

export default function Header() {


    return <header className={style.header}>
        <img src={logo} className={style.logo} alt="logo" />

        <nav className={style.nav}>
            <NavLink
                to={"/catalog/accordions"}
                className={style.button}
                activeclassname="active"
            >Accordions</NavLink >

            <NavLink
                to={"/catalog/keyboards"}
                className={style.button}
                activeclassname="active"
            >Keyboards</NavLink >

            <NavLink
                to={"/catalog/synthesizers"}
                className={style.button}
                activeclassname="active"
            >Synthesizers</NavLink >
        </nav>

        <div className={style.cart}>
            <i className={`fa-solid fa-cart-shopping ${style.cart_icon}`}></i>

            <p className={style.items_in_cart_count}>225</p>
        </div>
    </header>
}