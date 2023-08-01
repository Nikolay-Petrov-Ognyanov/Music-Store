import style from "./Catalog.module.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Card from "../Card/Card"

export default function Catalog() {
    const { category } = useParams()

    const [data, setData] = useState(null)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("/database.json")
                const data = await response.json()

                setData(data[category])
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [category])

    return <section className={style.catalog}>
        <div className={style.top}>
            <div className="sorting_container">
                <label htmlFor="sort_by">Sort by: </label>

                <select className={style.select} name="sort_by">
                    <option value="alphabetical: a-z">
                        Alphabetical A-Z
                    </option>

                    <option value="alphabetical: z-a">
                        Alphabetical Z-A
                    </option>

                    <option value="price: ascending">
                        Price ascending
                    </option>

                    <option value="price: descending">
                        Price ascending
                    </option>
                </select>
            </div>

            <span>Showing X products out of Y</span>
        </div>

        <div className={style.bottom}>
            <aside className={style.left}>
                Filter by:
            </aside>

            <div className={style.right}>

                <div className={style.cards}>
                    {data && data.map(item => <Card key={item.id} item={item} />)}
                </div>
            </div>
        </div>
    </section>
}