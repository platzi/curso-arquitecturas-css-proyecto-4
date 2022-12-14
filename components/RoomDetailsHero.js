import Image from 'next/image';
import styles from '../styles/RoomDetailsHero.module.scss';

export const RoomDetailsHero = ({ imageUrl }) => {
    
    return (
        <div className={styles.roomDetailsHero}>
            <h3>Aquí va un titulo espectacular</h3>
            <span>Rating: ⭐⭐⭐⭐</span> <span>100 reviews</span> <span>Perú, Piura, Punta Sal</span>
            <div className={styles.photosContainer}>
                <img className={styles.main} src={imageUrl} alt="" />
                <img className={styles.one} src={imageUrl} alt="" />
                <img className={styles.two} src={imageUrl} alt="" />
                <img className={styles.three} src={imageUrl} alt="" />
                <img className={styles.four} src={imageUrl} alt="" />
            </div>
            
        </div>
    )
};
