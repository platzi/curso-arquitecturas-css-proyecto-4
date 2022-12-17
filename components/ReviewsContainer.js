import styles from '../styles/ReviewsContainer.module.scss';
import { Review } from './Review';

export const ReviewsContainer = ({reviews}) => {
    return (
        <div className={styles.reviewsContainer}>
            {
                reviews.map( (r, i) => {
                    return <Review review={r} key={i} />
                })
            }
        </div>
    )
}