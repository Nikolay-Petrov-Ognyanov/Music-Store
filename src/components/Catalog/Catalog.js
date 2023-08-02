import style from "./Catalog.module.css"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Card from "../Card/Card"

export default function Catalog() {
    const { category } = useParams()

    const navigate = useNavigate()

    const [instruments, setInstruments] = useState(null)
    const [showDropdownMenu, setShowDropdownMenu] = useState(false)
    const [sortingCriteria, setSortingCriteria] = useState("Alphabetical A-Z")
    const [manufacturers, setManufacturers] = useState([])
    const [numbersOfKeys, setNumberOfKeys] = useState([])

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
                const uniqueManufacturers = new Set()
                const uniqueNumbersOfKeys = new Set()

                instrumentsFromServer.forEach(instrument => {
                    uniqueManufacturers.add(instrument.manufacturer)

                    if (instrument.keys > 0) {
                        uniqueNumbersOfKeys.add(instrument.keys)
                    } else if (instrument.basses > 0) {
                        uniqueNumbersOfKeys.add(instrument.basses)
                    }
                })

                setInstruments(instrumentsFromServer)
                
                setManufacturers(Array.from(uniqueManufacturers).sort(
                    (a, b) => a.localeCompare(b)
                ))

                setNumberOfKeys(Array.from(uniqueNumbersOfKeys).sort((a, b) => a - b))
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
                <p>Filter by:</p>

                <div className={style.filter_container}>
                    <p>Manufacturer</p>

                    <div className={style.filtering_criteria_container}>
                        {manufacturers.map((manufacturer, index) => (
                            <div key={index}>
                                <input type="checkbox" className={style.checkbox} />

                                <span className={style.filtering_criteria_span}>
                                    {manufacturer}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={style.filter_container}>
                    <p>{KEYS}</p>

                    <div className={style.filtering_criteria_container}>
                        {numbersOfKeys.map((numberOfKeys, index) => (
                            <div key={index}>
                                <input type="checkbox" className={style.checkbox} />

                                <span className={style.filtering_criteria_span}>
                                    {numberOfKeys}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </aside>

            <div className={style.right}>
                <div className={style.cards}>
                    {instruments && instruments.map(item => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    </section >
}