import { useRouter } from 'next/router'
import RoomsContext from '../../contexts/RoomsContext';
import { useContext } from "react";

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
          
          <RoomDetailsHero imageUrl={img_url} />
                
          <section className={styles.singleRoom}>
          
            <div className={styles.singleRoomInfo}>
          
              <article className={styles.desc}>
                <h3>details</h3>
                <p>{description}</p>
              </article>
          
              <article className={styles.info}>
              
                <h3>info</h3>
                <h6>price : ${price}</h6>
                
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
        </>
      )
}

export default RoomDetails