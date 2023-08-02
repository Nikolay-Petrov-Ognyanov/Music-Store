import { useParams } from "react-router-dom"
import contact_us from "./pages/contact_us"
import faq from "./pages/faq"
import privacy_policy from "./pages/privacy_policy"
import terms_and_conditions from "./pages/terms_and_conditions"

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