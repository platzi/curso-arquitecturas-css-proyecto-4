import styles from '../styles/Review.module.scss';
import Image from 'next/image';

export const Review = ({review, hidden}) => {
    
    const {
        image,
        guestName,
        date,
        title,
        content
    } = review

    return (
        <div className={`${styles.review} ${hidden && styles.mobileHidden}`}>
            <div className={styles.header}>

                <Image
                    src={image} 
                    alt=""
                    className={styles.img}
                    width={40}
                    height={40} 
                />
                <div>
                    <h6>{guestName}</h6>
                    <div>
                        <p>{date.concat(' - ', title)}</p>    
                    </div>
                    
                </div>

            </div>
            <div className={styles.content}>
                <p> {content} </p>
            </div>
        </div>
    )
}