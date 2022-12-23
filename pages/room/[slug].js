import { useRouter } from 'next/router'
import { Booking } from '../../components/Booking';
import RoomsContext from '../../contexts/RoomsContext';
import { useContext } from "react";
import Image from 'next/image';
import { Indicator } from '../../components/Indicator';
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

  const reviews = [
    {image:'/images/guests_goku.jpg', guestName: 'Goku', date:'noviembre 2022', title: 'Viaje en familia', content: 'Un lugar agradable, volveré'},
    {image:'/images/guests_goku.jpg', guestName: 'Vegeta', date:'noviembre 2022', title: 'Viaje en familia', content: 'Un lugar agradable, volveré'},
    {image:'/images/guests_goku.jpg', guestName: 'Bullma', date:'noviembre 2022', title: 'Viaje en familia', content: 'Un lugar agradable, volveré'},
    {image:'/images/guests_goku.jpg', guestName: 'Goha', date:'noviembre 2022', title: 'Viaje en familia', content: 'Un lugar agradable, volveré'},
    {image:'/images/guests_goku.jpg', guestName: 'Krilin', date:'noviembre 2022', title: 'Viaje en familia', content: 'Un lugar agradable, volveré'},
    {image:'/images/guests_goku.jpg', guestName: 'Cell', date:'noviembre 2022', title: 'Viaje en familia', content: 'Un lugar agradable, volveré'},
    {image:'/images/guests_goku.jpg', guestName: 'Majin Boo', date:'noviembre 2022', title: 'Viaje en familia', content: 'Un lugar agradable, volveré'},
  ]
    
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
  
  const amenities = [
    {description: 'Kitchen', icon: 'amenities-kitchen.png'},
    {description: 'Dedicated workspace' , icon: 'amenities-workspace.png'},
    {description: 'Shared pool', icon: 'amenities-pool.png'},
    {description: 'Wifi', icon: 'amenities-wifi.png'},
    {description: 'Free parking', icon: 'amenities-parking.png'},
    {description: 'Pets allowed', icon: 'amenities-pets.png'},
    {description: 'Public or shared beach access', icon: 'amenities-beach.png'},
    {description: 'Desert  view', icon: 'amenities-desert.png'},
  ]
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
        
        {
          amenities.map((a, i) => {
            return <div key={i}>
              <Image
                src={`/images/${a.icon}`}
                width={40}
                height={40}
                alt=''
              />
              <p>{a.description}</p>
            </div>
          })
        }
      </section>

      <section className={styles.indicators}>
          <h3>4.75 . 24 reseñas</h3>
          <div className={styles.indicators}>
            {
              [
                {caption: 'Limpieza', rating: 5},
                {caption: 'Comunicación', rating: 4},
                {caption: 'Llegada', rating: 2},
                {caption: 'Fiabilidad', rating: 3},
                {caption: 'Ubicación', rating: 2.5},
                {caption: 'Precio', rating: 4.9},
              ].map((e, i) => {
                return <Indicator caption={e.caption} rating={e.rating} key={i} />
              })
            }
            
          </div>
      </section>

      <section className={styles.reviews}>
            <ReviewsContainer reviews={reviews}/>
      </section>

      <section className={styles.map}>
        <MapContainer center={center} zoom={zoom} />
      </section>
      
    </>
  )
}

export default RoomDetails