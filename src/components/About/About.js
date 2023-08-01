import { useParams } from "react-router-dom"
import contact_us from "./contact_us"
import faq from "./faq"
import privacy_policy from "./privacy_policy"
import terms_and_conditions from "./terms_and_conditions"
import { useEffect } from "react"

export default function About() {
    const { page } = useParams()

    // useEffect(() => { setTimeout(() => window.scrollTo(0, 0), 100) }, [])

    const about = {
        contact_us,
        faq,
        privacy_policy,
        terms_and_conditions
    }

    return about[page]
}