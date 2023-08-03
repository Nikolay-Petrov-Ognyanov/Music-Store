import style from "./Card.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

export default function Card({ item }) {
    const stars = Array.from({ length: item.rating }, (star, index) => (
        <FontAwesomeIcon key={index} icon={faStar} />
    ))

    return <article className={style.article}>
        <div className={style.image_container}>
            <img
                src={item.image} alt={item.name}
                className={item.name === "SPIX 96" ? style.spix_96 : ""}
            />
        </div>

        <div className={style.text_container}>
            <h1 className={style.name} >{item.name}</h1>

            <p className={style.rating}>
                <span className={style.stars}>{stars}</span> ({item.ratings})
            </p>

            <p className={style.description}>{item.description}</p>

            <p className={style.price}>
                {item.discount > 0 && <span className={style.previous_price}>
                    {item.price.toFixed(2)} BGN
                </span>}

                <span className={style.current_price}>
                    {(item.price * (1 - item.discount)).toFixed(2)} BGN
                </span>

            </p>

            <button className={style.button} >Add to cart</button>
        </div>
    </article>
}