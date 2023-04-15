import Link from 'next/link';
import Image from "next/image";
import styles from '../styles/PlaceCard.module.scss'

export const PlaceCard = ({place}) => {


  const { name, slug, price, imagesUrls, generalRating, location } = place;

  return (
    <article className={styles.place}>
      <Link href={`/places/${slug}`} className={styles.placeLink}>
        <div className={styles.imgContainer}>
          <Image
            src={imagesUrls[0]}
            width={500} 
            height={500}
            priority
            alt="" 
          />
          
        </div>
        <div className={styles.info}>
          <h3>{name}</h3>
          <p>{location}</p>
          <span>{'⭐'.repeat(generalRating)}</span>
          <p>$ {price} per night </p>
        </div>
      </Link>      
    </article>
  );
};
