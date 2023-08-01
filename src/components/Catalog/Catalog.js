import style from "./Catalog.module.css"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Card from "../Card/Card"

export default function Catalog() {
    const { category } = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState(null)

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
            <div>
                <label htmlFor="sort_by">Sort by: </label>

                <select className={style.select} name="sort_by">
                    <option class={style.option} value="alphabetical: a-z">
                        Alphabetical A-Z
                    </option>

                    <option class={style.option} value="alphabetical: z-a">
                        Alphabetical Z-A
                    </option>

                    <option class={style.option} value="price: ascending">
                        Price ascending
                    </option>

                    <option class={style.option} value="price: descending">
                        Price descending
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