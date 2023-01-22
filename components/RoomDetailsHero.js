import { Carousel } from './Carousel';
import Image from 'next/image';
import styles from '../styles/RoomDetailsHero.module.scss';

export const RoomDetailsHero = ({ images, name, website, location }) => {
    //console.log(images)
    return (
    
        <div className={styles.roomDetailsHero}>
            
            <div className={styles.generalInfo}>
                <div>
                    <h3>{name}</h3>
                    <a href={website}>{website}</a>
                </div>
                
                <span>Rating: ⭐⭐⭐⭐</span><span>100 reviews</span><span>{location}</span>
            </div>
            
            <div className={styles.photosContainer}>
                <div className={styles.mainImage}>
                    <Image 
                        width={500}
                        height={500}
                        src={images[0]}
                        alt=''
                    />
                </div>
                
                <div className={styles.secondaryImages}>
                    {
                        images.map( (img, i) => (
                            (i >= 1 && i <=4) && <Image 
                                key={i}
                                width={500}
                                height={500}
                                src={img}
                                alt=''
                            />
                         ) )
                    }
                </div>
            </div>
            <div className={styles.carousel}>
                <Carousel>
                    {
                        images.map((img, i) => (
                            <Image
                                key={i}
                                src={img} 
                                alt=""
                                //className={styles.img}
                                width={200}
                                height={200}
                            />
                        ))
                    }
                </Carousel>
            </div>
            
            
        </div>
    )
};
