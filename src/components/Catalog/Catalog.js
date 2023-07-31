import style from "./Catalog.module.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

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
        {data && data.map(i => <p key={i.id}>{i.name}</p>)}
    </section>
}