import style from "./Footer.module.css"
import { NavLink } from "react-router-dom"

export default function Footer() {
    return <footer className={style.footer}> <nav className={style.nav}>
        <NavLink
            to="/about/terms_and_conditions"
            className={style.button}
            activeclassname="active"
        >Terms and Conditions</NavLink>

        <NavLink
            to="/about/privacy_policy"
            className={style.button}
            activeclassname="active"
        >Privacy Policy</NavLink>

        <NavLink
            to="/about/contact_us"
            className={style.button}
            activeclassname="active"
        >Contact Us</NavLink>
    </nav></footer>
}