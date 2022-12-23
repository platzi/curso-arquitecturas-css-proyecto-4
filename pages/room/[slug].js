import { useRouter } from 'next/router'
import { Booking } from '../../components/Booking';
import RoomsContext from '../../contexts/RoomsContext';
import { useContext } from "react";
import Image from 'next/image';
import { Amenities } from '../../components/Amenities';
import { Indicators } from '../../components/Indicators';
import { ReviewsContainer } from '../../components/ReviewsContainer';
import { RoomDetailsHero } from '../../components/RoomDetailsHero';
import MapContainer  from '../../components/MapContainer';
import Link from 'next/link'
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
          <Link href="/rooms" className="btn-primary">
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

      <section className={styles.booking}>
        <div className={styles.datesPicker}>
          <Booking />
        </div>
        
      </section>

      <section className={styles.singleRoom}>
      
        <div className={styles.singleRoomInfo}>
      
          <article className={styles.desc}>
            <h3>details</h3>
            <p>{description}</p>
          </article>
      
          
        </div>
    
      </section>

      <section className={styles.amenities}>
        <h3>Amenities</h3>
        <Amenities />
        
      </section>

      <section className={styles.indicators}>
        <h3>Reseñas</h3>
        <Indicators />
      </section>

      <section className={styles.reviews}>
        <h3>Reviews</h3>
        <ReviewsContainer />
      </section>

      <section className={styles.map}>
        <h3>Locations</h3>
        <MapContainer center={center} zoom={zoom} />
      </section>
      
    </>
  )
}

export default RoomDetails