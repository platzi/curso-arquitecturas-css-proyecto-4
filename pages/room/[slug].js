import { useRouter } from 'next/router'
import { useContext } from "react";
import Link from 'next/link'

import RoomsContext from '../../contexts/RoomsContext';

import { RoomDetailsHero } from '../../components/RoomDetailsHero';
import { Booking } from '../../components/Booking';
import { Description } from '../../components/Description';
import { Ratings } from '../../components/Ratings';
import { Amenities } from '../../components/Amenities';
import { ReviewsContainer } from '../../components/ReviewsContainer';
import MapContainer  from '../../components/MapContainer';

import styles from '../../styles/RoomDetails.module.scss';

const RoomDetails = () => {

  const { rooms } = useContext(RoomsContext)
  const router = useRouter()
  const { slug } = router.query
  const room = rooms.find( room => room.slug === slug)
    
  if (!room) {
      return (
        <div className="error">
          <h3> no such room could be found...</h3>
          <Link href="/rooms">
            back to rooms
          </Link>
        </div>
      )
  }    
    
  const {
    name,
    description,
    price,
    extras,
    img_url
  } = room

  const center = { lat: -12.4828266, lng: -76.8071609 }
  const zoom = 13
  
  
  return (
    <>
      
      <RoomDetailsHero room={room} />

      <section className={styles.section}>
        <h3>Booking</h3>
        <Booking />
      </section>

      <section className={styles.section}>
        <h3>Description</h3>
        <Description content={description}/>
      </section>

      <section className={styles.section}>
        <h3>Amenities</h3>
        <Amenities />
      </section>

      <section className={styles.section}>
        <h3>Ratings</h3>
        <Ratings />
      </section>

      <section className={styles.section}>
        <h3>Reviews</h3>
        <ReviewsContainer />
      </section>

      <section className={styles.section}>
        <h3>Location</h3>
        <MapContainer center={center} zoom={zoom} />
      </section>
      
    </>
  )
}

export default RoomDetails