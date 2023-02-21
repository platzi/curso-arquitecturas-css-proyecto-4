import Image from 'next/image';
import { Carousel } from './Carousel';
import styles from '../styles/PlaceDetailsHero.module.scss';

export const PlaceDetailsHero = ({ images, name, location, generalRating, price }) => {

    return (
    
        <div className={styles.placeDetailsHero}>
            
            <div className={styles.generalInfo}>
                <div>
                    <h3>{name} - Price per night: $ {price}</h3>
                </div>
                
                <span>Rating: {'⭐'.repeat(generalRating)}</span><span>{location}</span>
            </div>
            
            <div className={styles.photosContainer}>
                <div className={styles.mainImage}>
                    <Image 
                        width={500}
                        height={500}
                        src={images[0]}
                        priority
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
