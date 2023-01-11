import Link from 'next/link';
import Image from "next/image";
import styles from '../styles/RoomCard.module.scss'

export const RoomCard = ({place}) => {


  const { name, slug, price, imagesUrls, generalRating, location } = place;

  return (
    <article className={styles.room}>
      <Link href={`/places/${slug}`} className={styles.roomLink}>
        <div className={styles.imgContainer}>
          <Image
            src={imagesUrls[0]}
            width={500} 
            height={500}
            alt="" 
          />
          
        </div>
        <div>
          <h3>{name}</h3>
          <p>{location}</p>
          <span>{generalRating}</span>
          <p>S/ {price} per night </p>
        </div>
      </Link>      
    </article>
  );
};
