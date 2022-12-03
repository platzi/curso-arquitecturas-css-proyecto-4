import React from "react";
import Link from 'next/link';
//import defaultImg from "../public/images/room-1.jpeg";
//import PropTypes from "prop-types";
// import { memo } from "react";
import styles from '../styles/Room.module.css'

export const Room = ({room}) => {

  //console.log(room)

  const { name, slug, price, img_url } = room;
  // console.log(name);
  return (
    <article className={styles.room}>
      
      <div className={styles.imgContainer}>
        <img src={img_url} alt="single room" />
        <div className={styles.priceTop}>
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link href={`/rooms/${slug}`} className={`${styles.roomLink} btn-primary`}>
          features
        </Link>
      </div>
      <p className={styles.roomInfo}>{name}</p>
    </article>
  );
};
/* 
Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};
 */