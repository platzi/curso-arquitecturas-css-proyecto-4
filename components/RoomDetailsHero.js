import Image from 'next/image';
import styles from '../styles/RoomDetailsHero.module.scss';

export const RoomDetailsHero = ({ imageUrl }) => {
    
    return (
        <div className={styles.roomDetailsHero}>
            <h3>Aquí va un titulo espectacular</h3>
            <span>Rating: ⭐⭐⭐⭐</span> <span>100 reviews</span> <span>Perú, Piura, Punta Sal</span>
            <div className={styles.photosContainer}>
                <Image 
                    className={styles.main}
                    width={500}
                    height={500}
                    src={imageUrl}
                />
                <Image 
                    className={styles.one}
                    width={500}
                    height={500}
                    src={imageUrl}
                />
                <Image 
                    className={styles.two}
                    width={500}
                    height={500}
                    src={imageUrl}
                />
                <Image 
                    className={styles.three}
                    width={500}
                    height={500}
                    src={imageUrl}
                />
                <Image 
                    className={styles.four}
                    width={500}
                    height={500}
                    src={imageUrl}
                />
                
                
            </div>
            
        </div>
    )
};
