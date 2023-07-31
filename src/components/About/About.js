import { useParams } from "react-router-dom"
import contact_us from "./ContactUs"
import faq from "./FAQ"
import privacy_policy from "./PrivacyPolicy"
import terms_and_conditions from "./PrivacyPolicy"

export default function About() {
    const { page } = useParams()

    const about = {
        contact_us,
        faq,
        privacy_policy,
        terms_and_conditions
    }

    return about[page]
}