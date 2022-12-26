import Image from 'next/image';
import styles from '../styles/RoomDetailsHero.module.scss';

export const RoomDetailsHero = ({ room }) => {
    
    return (
        <div className={styles.roomDetailsHero}>
            
            <div className={styles.generalInfo}>
                <div>
                    <h3>{room.name}</h3>
                    <a href={room.website}>{room.website}</a>
                </div>
                
                <span>Rating: ⭐⭐⭐⭐</span><span>100 reviews</span><span>{room.location}</span>
            </div>
            
            <div className={styles.photosContainer}>
                <div className={styles.mainImage}>
                    <Image 
                        
                        width={500}
                        height={500}
                        src={room.mainImageUrl}
                        alt=''
                    />
                </div>
                <div className={styles.secondaryImages}>
                    {
                        room.secondaryImagesUrls.map( (img, i) => {
                            return <Image 
                                key={i}
                                width={500}
                                height={500}
                                src={img}
                                alt=''
                            />
                        } )
                        
                    }
                </div>
            </div>
            
        </div>
    )
};
