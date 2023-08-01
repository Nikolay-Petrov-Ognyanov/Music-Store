import style from "./Header.module.css"
import logo from "../../music-store-logo.png"
import { NavLink } from "react-router-dom"
import { scrollToTop } from "../../utility/scrollToTop"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

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

        {/* <div className={style.cart}>
            <FontAwesomeIcon icon={faCartShopping} className={style.cart_icon} />

            <p className={style.items_in_cart_count}>0</p>
        </div> */}
    </header>
}