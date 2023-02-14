import styles from '../styles/ReviewsContainer.module.scss';
import { Review } from './Review';

export const ReviewsContainer = ({reviews}) => {

    return (
        <div className={styles.reviewsContainer}>
            {
                reviews.map( (r, i) => {
                    return <Review key={i} review={r} hidden={i > 3}/>
                })
            }
        </div>
    )
}