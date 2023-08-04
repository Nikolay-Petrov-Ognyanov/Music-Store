import "./App.css"
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Catalog from "./components/Catalog/Catalog"
import About from "./components/About/About"

export default function App() {
	return <div className="App">
		<Header />

		<main> <Routes>
			<Route
				path="/catalog/:category"
				element={<Catalog />}
				viewportWidth={visualViewport}
			/>

			<Route
				path="/about/:page"
				element={<About />}
				viewportWidth={visualViewport}
			/>

			<Route
				path="*"
				element={<Catalog />}
				viewportWidth={visualViewport}
			/>
		</Routes> </main>

		<Footer />
	</div>
}