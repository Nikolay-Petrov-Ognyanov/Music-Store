import style from "./Footer.module.css"
import { scrollToTop } from "../../utility/scrollToTop"
import { NavLink, useLocation, useParams } from "react-router-dom"
import { useEffect } from "react"

export default function Footer() {
    const page = useLocation().pathname.split("/").pop()

    useEffect(() => {
        console.log(page)
    }, [page])


    return <footer className={style.footer}> <nav className={style.nav}>
        <NavLink
            to="/about/contact_us"
            className={style.button}
            activeclassname="active"
            onClick={scrollToTop}
        >
            {page !== "contact_us" && "Contact Us"}
            {page === "contact_us" && "Back to Top"}
        </NavLink>

        <NavLink
            to="/about/faq"
            className={style.button}
            activeclassname="active"
            onClick={scrollToTop}
        >
            {page !== "faq" && "FAQ"}
            {page === "faq" && "Back to Top"}
        </NavLink>

        <NavLink
            to="/about/terms_and_conditions"
            className={style.button}
            activeclassname="active"
            onClick={scrollToTop}
        >
            {page !== "terms_and_conditions" && "Terms and Conditions"}
            {page === "terms_and_conditions" && "Back to Top"}
        </NavLink>

        <NavLink
            to="/about/privacy_policy"
            className={style.button}
            activeclassname="active"
            onClick={scrollToTop}
        >
            {page !== "privacy_policy" && "Privacy Policy"}
            {page === "privacy_policy" && "Back to Top"}
        </NavLink>
    </nav></footer>
}