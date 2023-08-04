import style from "./Catalog.module.css"
import { useState, useEffect, useCallback } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Card from "../Card/Card"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"
// import { useSelector } from "react-redux"

export default function Catalog() {
	const navigate = useNavigate()

	const { category } = useParams()

	// const showModal = useSelector(state => state.modal.value)
	// const viewportWidth = useSelector(state => state.viewportWidth.value)

	const [instruments, setInstruments] = useState(null)
	const [filteredByPrice, setFilteredByPrice] = useState([])
	const [filteredByManufacturer, setFilteredByManufacturer] = useState([])
	const [filteredByNumberOfKeys, setFilteredByNumberOfKeys] = useState([])
	const [sortedInstruments, setSortedInstruments] = useState([])

	const [showDropdownMenu, setShowDropdownMenu] = useState(false)
	const [sortingCriteria, setSortingCriteria] = useState("Alphabetical A-Z")

	const [lowestPrice, setLowestPrice] = useState(0)
	const [highestPrice, setHighestPrice] = useState(0)
	const [priceRange, setPriceRange] = useState([0, 0])

	const [manufacturers, setManufacturers] = useState([])
	const [numbersOfKeys, setNumbersOfKeys] = useState([])

	const [fromManufacturer, setFromManufacturer] = useState({})
	const [withNumberOfKeys, setWithNumberOfKeys] = useState({})

	const [selectedManufacturers, setSelectedManufacturers] = useState([])
	const [selectedNumbersOfKeys, setSelectedNumbersOfKeys] = useState([])

	const KEYS = category && category === "accordions" ? "Basses" : "Keys"

	const sortingCriteriaVariants = [
		"Alphabetical A-Z",
		"Alphabetical Z-A",
		"Price ascending",
		"Price descending"
	]

	useEffect(() => {
		if (!category) navigate("/catalog/accordions")

		async function fetchData() {
			try {
				const response = await fetch("/database.json")
				const data = await response.json()
				const instrumentsFromServer = data[category || "accordions"]

				let lowestInstrumentPrice = 0
				let highestInstrumentPrice = 0

				instrumentsFromServer.forEach(instrument => {
					const price = instrument.price * (1 - instrument.discount)

					if (lowestInstrumentPrice === 0) lowestInstrumentPrice = price
					if (highestInstrumentPrice === 0) highestInstrumentPrice = price
					if (price < lowestInstrumentPrice) lowestInstrumentPrice = price
					if (price > highestInstrumentPrice) highestInstrumentPrice = price
				})

				setLowestPrice(lowestInstrumentPrice)
				setHighestPrice(highestInstrumentPrice)
				setPriceRange([lowestInstrumentPrice, highestInstrumentPrice])
				setInstruments(instrumentsFromServer)
			} catch (error) {
				console.error(error)
			}
		}

		fetchData()
	}, [category, navigate])

	useEffect(() => {
		const filtered_by_price = instruments && instruments.filter(instrument => {
			const price = instrument.price * (1 - instrument.discount)

			if (price >= priceRange[0] && price <= priceRange[1]) {
				return instrument
			} else return null
		})

		const uniqueManufacturers = new Set()
		const manufacturerCounts = {}

		filtered_by_price && filtered_by_price.forEach(instrument => {
			const manufacturer = instrument.manufacturer

			if (!manufacturerCounts[manufacturer]) {
				manufacturerCounts[manufacturer] = 0
			}

			manufacturerCounts[manufacturer]++
			uniqueManufacturers.add(instrument.manufacturer)
		})

		setFromManufacturer(manufacturerCounts)

		const sortedManufacturers = Array.from(uniqueManufacturers).sort(
			(a, b) => a.localeCompare(b)
		)

		setManufacturers(sortedManufacturers)

		setFilteredByPrice(filtered_by_price)
	}, [priceRange, instruments])

	useEffect(() => {
		const filtered_by_manufacturer = (
			filteredByPrice && filteredByPrice.filter(instrument => {
				if (selectedManufacturers.includes(instrument.manufacturer)) {
					return instrument
				} else {
					return null
				}
			})
		)

		const filtered = (
			(filtered_by_manufacturer
				&& filtered_by_manufacturer.length > 0
				&& filtered_by_manufacturer
			) || (
				filteredByPrice
				&& filteredByPrice.length > 0
				&& filteredByPrice
			)
		)

		const uniqueNumbersOfKeys = new Set()
		const numberOfKeysCounts = {}

		filtered && filtered.forEach(instrument => {
			const numberOfKeys = instrument.keys > 0 ? (
				instrument.keys
			) : instrument.basses

			if (!numberOfKeysCounts[numberOfKeys]) {
				numberOfKeysCounts[numberOfKeys] = 0
			}

			numberOfKeysCounts[numberOfKeys]++

			if (instrument.keys > 0) {
				uniqueNumbersOfKeys.add(instrument.keys)
			} else if (instrument.basses > 0) {
				uniqueNumbersOfKeys.add(instrument.basses)
			}
		})

		setWithNumberOfKeys(numberOfKeysCounts)

		const sortedNumbersOfKeys = Array.from(uniqueNumbersOfKeys).sort(
			(a, b) => a - b
		)

		setNumbersOfKeys(sortedNumbersOfKeys)

		if (Object.values(selectedManufacturers).some(v => v)) {
			setFilteredByManufacturer(filtered)
		} else {
			setFilteredByManufacturer(filteredByPrice)
		}
	}, [filteredByPrice, selectedManufacturers])

	useEffect(() => {
		const previouslyFiltered = (
			(filteredByManufacturer
				&& filteredByManufacturer.length > 0
				&& filteredByManufacturer
			) || (filteredByPrice
				&& filteredByPrice.length > 0
				&& filteredByPrice
			)
		)

		const filtered_by_number_of_keys = (
			previouslyFiltered && previouslyFiltered.filter(instrument => {
				const instrumentNumberOfKeys = instrument.basses || instrument.keys

				if (selectedNumbersOfKeys.includes(instrumentNumberOfKeys)) {
					return instrument
				} else {
					return null
				}
			})
		)

		if (Object.values(selectedNumbersOfKeys).some(v => v)) {
			setFilteredByNumberOfKeys(filtered_by_number_of_keys)
		} else {
			setFilteredByNumberOfKeys(previouslyFiltered)
		}
	}, [filteredByPrice, filteredByManufacturer, selectedNumbersOfKeys])

	const handleSorting = useCallback(criteria => {
		if (filteredByNumberOfKeys) {
			if (criteria === "Alphabetical A-Z") {
				setSortedInstruments(filteredByNumberOfKeys.sort((a, b) => {
					return a.name.localeCompare(b.name)
				}))
			}

			if (criteria === "Alphabetical Z-A") {
				setSortedInstruments(filteredByNumberOfKeys.sort((a, b) => {
					return b.name.localeCompare(a.name)
				}))
			}

			if (criteria === "Price ascending") {
				setSortedInstruments(filteredByNumberOfKeys.sort((a, b) => {
					const aPrice = a.price * (1 - a.discount)
					const bPrice = b.price * (1 - b.discount)

					return aPrice - bPrice
				}))
			}

			if (criteria === "Price descending") {
				setSortedInstruments(filteredByNumberOfKeys.sort((a, b) => {
					const aPrice = a.price * (1 - a.discount)
					const bPrice = b.price * (1 - b.discount)

					return bPrice - aPrice
				}))
			}
		}
	}, [filteredByNumberOfKeys])

	useEffect(() => {
		handleSorting(sortingCriteria)
	}, [filteredByNumberOfKeys, handleSorting, sortingCriteria])

	function handleManufacturerCheckboxChange(manufacturer) {
		setSelectedManufacturers(previouslySelected => {
			if (previouslySelected.includes(manufacturer)) {
				return previouslySelected.filter(m => m !== manufacturer)
			} else {
				return [...previouslySelected, manufacturer]
			}
		})
	}

	function handleNumberOfKeysCheckboxChange(numberofKeys) {
		setSelectedNumbersOfKeys(previouslySelected => {
			if (previouslySelected.includes(numberofKeys)) {
				return previouslySelected.filter(n => n !== numberofKeys)
			} else {
				return [...previouslySelected, numberofKeys]
			}
		})
	}

	return <section className={style.catalog}>
		<div className={style.top}>
			<div className={style.sorting_container} >
				<span>Sort by:</span>

				<div
					className={style.select_container}
					onMouseLeave={() => setShowDropdownMenu(false)}
				>
					<p
						onMouseOver={() => setShowDropdownMenu(true)}
						className={style.select}
					>
						{sortingCriteria}
					</p>

					<ul
						className={showDropdownMenu ? (
							style.ul_show
						) : style.ul_hide}
					>
						{(sortingCriteriaVariants.filter(criteria => (
							criteria !== sortingCriteria
						)).map((criteria, index) => (
							<li
								key={index}
								className={style.li}

								onClick={() => {
									setSortingCriteria(criteria)
									handleSorting(criteria)
									setShowDropdownMenu(false)
								}}
							>
								{criteria}
							</li>
						)))}
					</ul>
				</div>
			</div>

			<span className={style.items_counter}>
				Showing X products out of {sortedInstruments.length}
			</span>
		</div>

		<div className={style.bottom}>
			<aside className={style.left}>
				<div className={style.filter_container}>
					<h2 className={style.h2}>Price</h2>

					<Slider
						min={lowestPrice}
						max={highestPrice}
						value={priceRange}
						onChange={(values) => setPriceRange(values)}
						range
					/>

					<p className={style.price_range} >
						<span>{Math.floor(priceRange[0])}</span>
						<span>{Math.ceil(priceRange[1])}</span>
					</p>
				</div>

				<div className={style.filter_container}>
					<h2 className={style.h2}>Manufacturer</h2>

					<div className={style.filtering_criteria_container}>
						{manufacturers.map((manufacturer, index) => (
							<label
								key={index}
								className={style.filtering_criteria}
							>
								<input
									type="checkbox"
									className={style.checkbox}
									checked={selectedManufacturers.includes(manufacturer)}

									onChange={() => {
										handleManufacturerCheckboxChange(
											manufacturer
										)
									}}
								/>

								<span className={style.filtering_criteria_span}>
									{manufacturer} ({fromManufacturer[manufacturer]})
								</span>
							</label>
						))}
					</div>
				</div>

				<div className={style.filter_container}>
					<h2 className={style.h2}>{KEYS}</h2>

					<div className={style.filtering_criteria_container}>
						{numbersOfKeys.map((numberOfKeys, index) => (
							<label
								key={index}
								className={style.filtering_criteria}
							>
								<input
									type="checkbox"
									className={style.checkbox}
									checked={selectedNumbersOfKeys.includes(numberOfKeys)}

									onChange={() => handleNumberOfKeysCheckboxChange(
										numberOfKeys
									)}
								/>

								<span className={style.filtering_criteria_span}>
									{numberOfKeys} ({withNumberOfKeys[numberOfKeys]})
								</span>
							</label>
						))}
					</div>
				</div>
			</aside>

			<div className={style.right}>
				<div className={style.cards}>
					{sortedInstruments && sortedInstruments.map(item => (
						<Card key={item.id} item={item} />
					))}
				</div>
			</div>
		</div>
	</section>
}