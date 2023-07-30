import "./App.css"
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Terms_and_Conditions from "./components/About/Terms_and_Contidions"
import Privacy_Policy from "./components/About/Privacy_Policy"
import Contact_Us from "./components/About/Contact_Us"

export default function App() {
	return <div className="App">
		<Header />

		<main> <Routes>
			<Route
				path="/about/terms_and_conditions"
				Component={Terms_and_Conditions}
			/>

			<Route
				path="/about/privacy_policy"
				Component={Privacy_Policy}
			/>

			<Route
				path="/about/contact_us"
				Component={Contact_Us}
			/>
		</Routes> </main>

		<Footer />
	</div>
}