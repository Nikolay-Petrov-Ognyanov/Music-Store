import style from "./Footer.module.css"
import { NavLink } from "react-router-dom"

export default function Footer() {


    return <footer className={style.footer}> <nav className={style.nav}>
        <NavLink className={style.button} activeclassname="active"
            to="/about/terms_and_conditions"
        >Terms and Conditions</NavLink>

        <NavLink className={style.button} activeclassname="active"
            to="/about/privacy_policy"
        >Privacy Policy</NavLink>

        <NavLink className={style.button} activeclassname="active"
            to="/about/contact_us"
        >Contact Us</NavLink>
    </nav></footer>
}