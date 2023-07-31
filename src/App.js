import "./App.css"
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Catalog from "./components/Catalog/Catalog"
import About from "./components/About/About"
import ContactUs from "./components/About/ContactUs"
import FAQ from "./components/About/FAQ"
import PrivacyPolicy from "./components/About/PrivacyPolicy"
import TermsAndConditions from "./components/About/TermsAndConditions"

export default function App() {
	return <div className="App">
		<Header />

		<main> <Routes>
			<Route
				path="/catalog/accordions"
				element={<Catalog />}
			/>

			<Route
				path="/catalog/keyboards"
				element={<Catalog />}
			/>

			<Route
				path="/catalog/synthesizers"
				element={<Catalog />}
			/>

			<Route
				path="/about/contact_us"
				element={<About JSX={ContactUs} />}
			/>

			<Route
				path="/about/faq"
				element={<About JSX={FAQ} />}
			/>

			<Route
				path="/about/terms_and_conditions"
				element={<About JSX={TermsAndConditions} />}
			/>

			<Route
				path="/about/privacy_policy"
				element={<About JSX={PrivacyPolicy} />}
			/>
		</Routes> </main>

		<Footer />
	</div>
}