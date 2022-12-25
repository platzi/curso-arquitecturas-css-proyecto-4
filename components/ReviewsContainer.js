import styles from '../styles/ReviewsContainer.module.scss';
import { Review } from './Review';

export const ReviewsContainer = () => {

    const reviews = [
        {image:'/images/guests_goku.jpg', guestName: 'Goku', date:'noviembre 2022', title: 'Viaje en familia', content: 'A cozy place, a piece of paradise in the desert. Andrea welcomed us with kindness, she welcomed us with all the confidence that a person can give.'},
        {image:'/images/guests_goku.jpg', guestName: 'Vegeta', date:'noviembre 2022', title: 'Viaje en familia', content: 'Quiet area, and I had everything I needed to have a good time'},
        {image:'/images/guests_goku.jpg', guestName: 'Bullma', date:'noviembre 2022', title: 'Viaje en familia', content: 'The host is super friendly and the place is very close to the beach.'},
        {image:'/images/guests_goku.jpg', guestName: 'Goha', date:'noviembre 2022', title: 'Viaje en familia', content: 'The place is beautiful, very quiet to have an adequate rest, close to the beach. Andrea was very friendly and gave us good tips on transportation and food in the area.'},
        {image:'/images/guests_goku.jpg', guestName: 'Krilin', date:'noviembre 2022', title: 'Viaje en familia', content: 'Villa Guadalupe is a peaceful place with good vibes. The bungalows are spacious, rustic, yet comfortable. You have access to the beach, but also a good-sized pool and a little yard you can rest all you want. You can also play and enjoy with littles Uma and Gilda (dog and cat) that will enlighten your stay even more. I loved it and enjoyed it very much.'},
        {image:'/images/guests_goku.jpg', guestName: 'Cell', date:'noviembre 2022', title: 'Viaje en familia', content: 'A cozy place, a piece of paradise in the desert. Andrea welcomed us with kindness, she welcomed us with all the confidence that a person can give. Feel free to enjoy the house pool, sunsets and grass. In addition, take care of Uma, the pet, they may love it a lot (her stone). Simply magnificent.'},
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