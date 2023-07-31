import style from "./Card.module.css"

export default function Card({ item }) {


    return <article className={style.article}>
        {item.name}
    </article>
}