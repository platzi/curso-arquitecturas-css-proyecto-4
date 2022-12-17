import { useRouter } from 'next/router'
import RoomsContext from '../../contexts/RoomsContext';
import { useContext } from "react";
import { Indicator } from '../../components/Indicator';

import { RoomDetailsHero } from '../../components/RoomDetailsHero';
import Link from 'next/link'
import styles from '../../styles/RoomDetails.module.scss'

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

      return (
        <>
          
          <RoomDetailsHero room={room} />
                
          <section className={styles.singleRoom}>
          
            <div className={styles.singleRoomInfo}>
          
              <article className={styles.desc}>
                <h3>details</h3>
                <p>{description}</p>
              </article>
          
              
            </div>
          
          </section>
          
          <section className={styles.roomExtras}>
            <h6>extras</h6>
            <ul className={styles.extras}>
              {extras.map((item, index) => (
                <li key={index}>- {item}</li>
              ))}
            </ul> 
          </section>

          <section className={styles.review}>
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
                    return <Indicator caption={e.caption} rating={e.rating}/>
                  })
                }
                
              </div>
          </section>
        </>
      )
}

export default RoomDetails