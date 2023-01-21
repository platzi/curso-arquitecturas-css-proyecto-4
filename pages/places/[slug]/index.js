import { server } from '../../../config'
import Link from 'next/link'

import { RoomDetailsHero } from '../../../components/RoomDetailsHero';
import { Booking } from '../../../components/Booking';
import { Description } from '../../../components/Description';
import { Ratings } from '../../../components/Ratings';
import { Amenities } from '../../../components/Amenities';
import { ReviewsContainer } from '../../../components/ReviewsContainer';

import MapContainer  from '../../../components/MapContainer';
import { Title } from '../../../components/Title';

import styles from '../../../styles/RoomDetails.module.scss';

export default function RoomDetails({ place }) {

  if ( !place ) {
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
  } = place

  const zoom = 13
    
  return (
    <>
      
      <RoomDetailsHero images={imagesUrls} name={name} website={website} location={location}/>
      
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

      {/* <section className={styles.section}>
        <Title text='Location' />
        <MapContainer center={center} zoom={zoom} />
      </section> */}
      
    </>
  )
}

export async function getServerSideProps({ query: { slug }}) {

  const res = await fetch(`${server}api/places/${slug}`)

  const place = await res.json();

    return {
        props: {
            place,
        }
    }
}