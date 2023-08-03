import style from "./Catalog.module.css"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Card from "../Card/Card"
import Slider from "rc-slider"
import "rc-slider/assets/index.css"


export default function Catalog() {
    const { category } = useParams()

    const navigate = useNavigate()

    const [instruments, setInstruments] = useState(null)
    const [showDropdownMenu, setShowDropdownMenu] = useState(false)
    const [sortingCriteria, setSortingCriteria] = useState("Alphabetical A-Z")

    const [lowestPrice, setLowestPrice] = useState(0)
    const [highestPrice, setHighestPrice] = useState(0)
    const [priceRange, setPriceRange] = useState([0, 0])

    const [manufacturers, setManufacturers] = useState([])
    const [numbersOfKeys, setNumbersOfKeys] = useState([])

    const [fromManufacturer, setFromManufacturer] = useState({})
    const [withNumberOfKeys, setWithNumberOfKeys] = useState({})

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

                const uniqueManufacturers = new Set()
                const uniqueNumbersOfKeys = new Set()

                const manufacturerCounts = {}
                const numberOfKeysCounts = {}

                instrumentsFromServer.forEach(instrument => {
                    const manufacturer = instrument.manufacturer

                    const numberOfKeys = instrument.keys > 0 ? (
                        instrument.keys
                    ) : instrument.basses

                    if (!manufacturerCounts[manufacturer]) {
                        manufacturerCounts[manufacturer] = 0
                    }

                    manufacturerCounts[manufacturer]++

                    setFromManufacturer(manufacturerCounts)

                    if (!numberOfKeysCounts[numberOfKeys]) {
                        numberOfKeysCounts[numberOfKeys] = 0
                    }

                    numberOfKeysCounts[numberOfKeys]++

                    setWithNumberOfKeys(numberOfKeysCounts)

                    uniqueManufacturers.add(instrument.manufacturer)

                    if (instrument.keys > 0) {
                        uniqueNumbersOfKeys.add(instrument.keys)
                    } else if (instrument.basses > 0) {
                        uniqueNumbersOfKeys.add(instrument.basses)
                    }
                })

                setManufacturers(Array.from(uniqueManufacturers).sort(
                    (a, b) => a.localeCompare(b)
                ))

                setNumbersOfKeys(Array.from(uniqueNumbersOfKeys).sort((a, b) => a - b))

                setInstruments(instrumentsFromServer)
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [category, navigate])

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
                Showing X products out of Y
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
                                />

                                <span className={style.filtering_criteria_span}>
                                    {numberOfKeys} ({withNumberOfKeys[numberOfKeys]})
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                <button className={style.clear_all_filters}>Clear all filters</button>
            </aside>

            <div className={style.right}>
                <div className={style.cards}>
                    {instruments && instruments.map(item => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    </section>
}