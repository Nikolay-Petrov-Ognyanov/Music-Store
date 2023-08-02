import style from "./Catalog.module.css"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Card from "../Card/Card"

export default function Catalog() {
    const { category } = useParams()

    const navigate = useNavigate()

    const [data, setData] = useState(null)
    const [showDropdownMenu, setShowDropdownMenu] = useState(false)
    const [sortingCriteria, setSortingCriteria] = useState("Alphabetical A-Z")

    const sortingCriteriaVarians = [
        "Alphabetical A-Z",
        "Alphabetical Z-A",
        "Price ascending",
        "Price descending"
    ]

    useEffect(() => {
        console.log(sortingCriteria && sortingCriteria)
    }, [sortingCriteria])

    useEffect(() => {
        if (!category) navigate("/catalog/accordions")

        async function fetchData() {
            try {
                const response = await fetch("/database.json")
                const data = await response.json()

                setData(data[category || "accordions"])
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [category, navigate])

    return <section className={style.catalog}>
        <div className={style.top}>
            <div className={style.sorting_container} >
                <label htmlFor="sort_by">Sort by:</label>

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
                        {(sortingCriteriaVarians.filter(criteria => (
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
                Filter by:
            </aside>

            <div className={style.right}>
                <div className={style.cards}>
                    {data && data.map(item => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    </section >
}