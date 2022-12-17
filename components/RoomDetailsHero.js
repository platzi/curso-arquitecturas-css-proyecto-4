import Image from 'next/image';
import styles from '../styles/RoomDetailsHero.module.scss';

export const RoomDetailsHero = ({ room }) => {
    
    return (
        <div className={styles.roomDetailsHero}>
            <div className={styles.generalInfo}>
                <h3>{room.name}</h3>
                <span>Rating: ⭐⭐⭐⭐</span><span>100 reviews</span><span>Perú, Piura, Punta Sal</span>
            </div>
            
            <div className={styles.photosContainer}>
                <Image 
                    className={styles.main}
                    width={500}
                    height={500}
                    src={room.img_url}
                    alt=''
                />
                <Image 
                    className={styles.one}
                    width={500}
                    height={500}
                    src={room.img_url}
                    alt=''
                />
                <Image 
                    className={styles.two}
                    width={500}
                    height={500}
                    src={room.img_url}
                    alt=''
                />
                <Image 
                    className={styles.three}
                    width={500}
                    height={500}
                    src={room.img_url}
                    alt=''
                />
                <Image 
                    className={styles.four}
                    width={500}
                    height={500}
                    src={room.img_url}
                    alt=''
                />
                    
            </div>
            
        </div>
    )
};
