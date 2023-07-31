import "./App.css"
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Catalog from "./components/Catalog/Catalog"
import About from "./components/About/About"
import Aside from "./components/Aside/Aside"

export default function App() {
	return <div className="App">
		<Header />

		<main>
			<Aside />

			<div className="main_container">
				<Routes>
					<Route path="/catalog/:category" element={<Catalog />} />
					<Route path="/about/:page" element={<About />} />
				</Routes>
			</div>
		</main>

		<Footer />
	</div>
}