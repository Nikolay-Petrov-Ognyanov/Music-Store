import "./App.css"
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import TermsAndConditions from "./components/About/TermsAndContidions"
import PrivacyPolicy from "./components/About/PrivacyPolicy"
import ContactUs from "./components/About/ContactUs"

export default function App() {
	return <div className="App">
		<Header />

		<main> <Routes>
			<Route
				path="/about/terms_and_conditions"
				element={<TermsAndConditions />}
			/>

			<Route
				path="/about/privacy_policy"
				element={<PrivacyPolicy />}
			/>

			<Route
				path="/about/contact_us"
				element={<ContactUs />}
			/>
		</Routes> </main>

		<Footer />
	</div>
}