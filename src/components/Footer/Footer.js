import style from "./Footer.module.css"
import { NavLink } from "react-router-dom"

export default function Footer() {
    function scrollToTop() { window.scrollTo(0, 0) }

    return <footer className={style.footer}> <nav className={style.nav}>
        <NavLink onClick={scrollToTop} className={style.button} activeclassname="active"
            to="/about/terms_and_conditions"
        >Terms and Conditions</NavLink>

        <NavLink onClick={scrollToTop} className={style.button} activeclassname="active"
            to="/about/privacy_policy"
        >Privacy Policy</NavLink>

        <NavLink onClick={scrollToTop} className={style.button} activeclassname="active"
            to="/about/contact_us"
        >Contact Us</NavLink>
    </nav></footer>
}