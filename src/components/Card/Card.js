import style from "./Card.module.css"

import { useDispatch } from "react-redux"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

import { showModal, hideModal } from "../../redux/features/modal"

export default function Card({ item }) {
    const dispatch = useDispatch()

    // Function to handle adding an item to the cart
    function handleAddToCart() {
        dispatch(showModal(item.name))
        setTimeout(() => { dispatch(hideModal()) }, 3000)
    }

    // Generate an array of FontAwesome icons for the star ratings
    const stars = Array.from({ length: item.rating }, (star, index) => (
        <FontAwesomeIcon
            key={index}
            icon={faStar}
        />
    ))

    return <article className={style.card}>
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

            <button
                className={style.button}
                onClick={handleAddToCart}
            >Add to cart
            </button>
        </div>
    </article>
}