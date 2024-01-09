import React from "react"
import { DataItem } from "../../context/DataContext"
import styles from "./Card.module.css"
import YellowStar from "./../../assets/imgs/Star_fill.svg"
import EmptyStar from "./../../assets/imgs/Star.svg"

type CardProps = {
    item: DataItem,
}

const Card: React.FC<CardProps> = ({ item }) => {
    const { name, image, price, rating, votes, popular, available } = item
    return (
        <div className={styles.card}>

            <div className={styles.imgAndPopularTagContainer}>
                <img
                    src={image}
                    alt={name}
                    className={styles.image}
                />
                {popular && (
                    <span className={styles.popularTag}>
                        Popular
                    </span>
                )}
            </div>

            <div className={styles.titleAndPriceContainer}>
                <h2 className={styles.title}>{name}</h2>
                <span className={styles.price}>{price}</span>
            </div>

            <div className={styles.cardThirdSection}>
                <div className={styles.starRatingAndVotesContainer}>
                    {votes ? (
                        <>
                            <img
                                src={YellowStar}
                                alt="yellow star"
                            />
                            <p className={styles.rating}>{rating}</p>
                            <p className={styles.votes}>{`(${votes} votes)`}</p>
                        </>
                    ) : (
                        <>
                            <img 
                                src={EmptyStar}
                                alt="empty star"
                            />
                            <p className={styles.noRatingsTag}>No ratings</p>
                        </>
                    )}
                </div>
                {!available && <p className={styles.soldOutTag}>Sold out</p>}
            </div>

        </div>
    )
}

export default Card