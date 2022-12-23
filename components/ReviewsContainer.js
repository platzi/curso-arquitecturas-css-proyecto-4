import styles from '../styles/ReviewsContainer.module.scss';
import { Review } from './Review';

export const ReviewsContainer = () => {

    const reviews = [
        {image:'/images/guests_goku.jpg', guestName: 'Goku', date:'noviembre 2022', title: 'Viaje en familia', content: 'Un lugar agradable, volveré'},
        {image:'/images/guests_goku.jpg', guestName: 'Vegeta', date:'noviembre 2022', title: 'Viaje en familia', content: 'Un lugar agradable, volveré'},
        {image:'/images/guests_goku.jpg', guestName: 'Bullma', date:'noviembre 2022', title: 'Viaje en familia', content: 'Un lugar agradable, volveré'},
        {image:'/images/guests_goku.jpg', guestName: 'Goha', date:'noviembre 2022', title: 'Viaje en familia', content: 'Un lugar agradable, volveré'},
        {image:'/images/guests_goku.jpg', guestName: 'Krilin', date:'noviembre 2022', title: 'Viaje en familia', content: 'Un lugar agradable, volveré'},
        {image:'/images/guests_goku.jpg', guestName: 'Cell', date:'noviembre 2022', title: 'Viaje en familia', content: 'Un lugar agradable, volveré'},
        {image:'/images/guests_goku.jpg', guestName: 'Majin Boo', date:'noviembre 2022', title: 'Viaje en familia', content: 'Un lugar agradable, volveré'},
    ]

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