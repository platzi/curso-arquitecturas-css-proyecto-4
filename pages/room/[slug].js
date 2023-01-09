import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import Link from 'next/link'

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

  const router = useRouter()
  const { slug } = router.query
  //const room = rooms.find( room => room.slug === slug)
  const [room, setRoom ] = useState([])
  
  useEffect(() => {
    console.log('Executing useEffect...', slug)
    //setLoading(true)
    fetch(`/api/places/${slug}`)
    //fetch(/api/places/[slug])
      .then((res) => res.json())
      .then((data) => {
        setRoom(data)
        //setLoading(false)
        
      })
  }, [])

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
    website,
    imagesUrls
  } = room

  const zoom = 13
    
  return (
    <>
      
      {/* <RoomDetailsHero images={imagesUrls} name={name} website={website} location={location}/> */}
      {/* <p>{imagesUrls}</p> */}
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