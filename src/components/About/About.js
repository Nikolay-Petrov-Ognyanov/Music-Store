import { useParams } from "react-router-dom"

import contact_us from "./pages/contact_us"
import faq from "./pages/faq"
import privacy_policy from "./pages/privacy_policy"
import terms_and_conditions from "./pages/terms_and_conditions"

export default function About() {
    // Retrieve the "page" parameter from the route using useParams hook
    const { page } = useParams()

    // Create an object mapping page names to their respective components
    const about = {
        contact_us,
        faq,
        privacy_policy,
        terms_and_conditions
    }

    // Return the selected page component based on the "page" parameter
    return about[page]
}