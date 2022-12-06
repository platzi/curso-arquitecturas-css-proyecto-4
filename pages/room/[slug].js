import { useRouter } from 'next/router'
import RoomsContext from '../../contexts/RoomsContext';
import { useContext } from "react";
import { Banner } from '../../components/Banner'
import { Hero } from '../../components/Hero';
import Link from 'next/link'
import styles from '../../styles/RoomDetail.module.css'

const RoomDetail = () => {
    const { rooms } = useContext(RoomsContext)
    const router = useRouter()
    const { slug } = router.query
    const room = rooms.find( room => room.slug === slug)
    //console.log(slug)
    //console.log(room.name)
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
        //capacity,
        //size,
        price,
        extras,
        //breakfast,
        //pets,
        img_url
      } = room

      return (
        <>
            <Hero imageUrl={img_url}>
                <Banner title={`${name} room`}>
                    <Link href="/rooms" className="btn-primary">
                        back to rooms
                    </Link>
                </Banner>
            </Hero>
            <section className={styles.singleRoom}>
            <div className={styles.singleRoomImages}>
              {/* {defaultImages.map((item, index) => (
                <img key={index} src={item} alt={name} />
              ))} */}
              <img /* key={index} */ src={img_url} alt={name} />
              <img /* key={index} */ src={img_url} alt={name} />
              <img /* key={index} */ src={img_url} alt={name} />
            </div>
            <div className={styles.singleRoomInfo}>
              <article className={styles.desc}>
                <h3>details</h3>
                <p>{description}</p>
              </article>
              <article className={styles.info}>
                <h3>info</h3>
                <h6>price : ${price}</h6>
                {/* <h6>size : {size} SQFT</h6> */}
                <h6>
                  max capacity :
                  {/* {capacity > 1 ? `${capacity} people` : `${capacity} person`} */}
                </h6>
                {/* <h6>{pets ? "pets allowed" : "no pets allowed"}</h6> */}
                {/* <h6>{breakfast && "free breakfast included"}</h6> */}
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

export default RoomDetail