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
import { Title } from '../../components/Title';

import styles from '../../styles/RoomDetails.module.scss';

const RoomDetails = () => {

  const { rooms } = useContext(RoomsContext)
  const router = useRouter()
  const { slug } = router.query
  const room = rooms.find( room => room.slug === slug)
    
  if (!room) {
      return (
        <div className={styles.error}>
          <h3> no such room could be found...</h3>
          <Link href="/">
            back to rooms
          </Link>
        </div>
      )
  }    
    
  const {
    name,
    description,
    coordinates: center,
    location,
    price,
    extras,
    img_url
  } = room

  const zoom = 13
    
  return (
    <>
      
      <RoomDetailsHero room={room} />

      <section className={styles.intro}>
        <Description content={description}/>
        <Booking />
      </section>

      <section className={styles.section}>
        <Title text='Amenities' />
        <Amenities />
      </section>

      <section className={styles.section}>
        <Title text='Ratings' />
        <Ratings />
      </section>

      <section className={styles.section}>
        <Title text='Reviews' />
        <ReviewsContainer />
      </section>

      <section className={styles.section}>
        <Title text='Location' />
        <MapContainer center={center} zoom={zoom} />
      </section>
      
    </>
  )
}

export default RoomDetails