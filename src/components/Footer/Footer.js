import style from "./Footer.module.css"
import { scrollToTop } from "../../utility/scrollToTop"
import { NavLink, useLocation } from "react-router-dom"

export default function Footer() {
    const pathname = useLocation().pathname.split("/").pop()

    return <footer className={style.footer}> <nav className={style.nav}>
        <NavLink
            to="/about/contact_us"
            className={style.button}
            activeclassname="active"
            onClick={scrollToTop}
        >
            {pathname !== "contact_us" && "Contact Us"}
            {pathname === "contact_us" && "Back to Top"}
        </NavLink>

        <NavLink
            to="/about/faq"
            className={style.button}
            activeclassname="active"
            onClick={scrollToTop}
        >
            {pathname !== "faq" && "FAQ"}
            {pathname === "faq" && "Back to Top"}
        </NavLink>

        <NavLink
            to="/about/terms_and_conditions"
            className={style.button}
            activeclassname="active"
            onClick={scrollToTop}
        >
            {pathname !== "terms_and_conditions" && "Terms and Conditions"}
            {pathname === "terms_and_conditions" && "Back to Top"}
        </NavLink>

        <NavLink
            to="/about/privacy_policy"
            className={style.button}
            activeclassname="active"
            onClick={scrollToTop}
        >
            {pathname !== "privacy_policy" && "Privacy Policy"}
            {pathname === "privacy_policy" && "Back to Top"}
        </NavLink>
    </nav></footer>
}