import Link from 'next/link';
import Image from "next/image";
import styles from '../styles/RoomCard.module.scss'

export const RoomCard = ({room}) => {


  const { name, slug, price, img_url } = room;

  return (
    <article className={styles.room}>
      <Link href={`/room/${slug}`} className={styles.roomLink}>
        <div className={styles.imgContainer}>
          <Image
            src={img_url}
            width={500} 
            height={500}
            alt="" 
          />
          <div className={styles.like}>
            <p>Like!</p>
          </div>
        </div>
        <div>
          <h3>{name}</h3>
          <p>Cusco Perú</p>
          <span>4.94</span>
          <p>S/ {price} per night </p>
        </div>
      </Link>      
    </article>
  );
};
