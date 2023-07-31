import style from "./Footer.module.css"
import { scrollToTop } from "../../utility/scrollToTop"
import { NavLink } from "react-router-dom"

export default function Footer() {
    return <footer className={style.footer}> <nav className={style.nav}>
        <NavLink
            to="/about/contact_us"
            className={style.button}
            activeclassname="active"
            onClick={scrollToTop}
        >Contact Us</NavLink>

        <NavLink
            to="/about/faq"
            className={style.button}
            activeclassname="active"
            onClick={scrollToTop}
        >FAQ</NavLink>
        <NavLink
            to="/about/terms_and_conditions"
            className={style.button}
            activeclassname="active"
            onClick={scrollToTop}
        >Terms and Conditions</NavLink>

        <NavLink
            to="/about/privacy_policy"
            className={style.button}
            activeclassname="active"
            onClick={scrollToTop}
        > Privacy Policy </NavLink>
    </nav></footer>
}