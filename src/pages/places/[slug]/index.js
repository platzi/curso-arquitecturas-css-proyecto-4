// import { server } from '../../../config'
import dbConnect from '../../../lib/dbConnect'
import Place from '../../../models/Place';
import Link from 'next/link'

import { PlaceDetailsHero } from '../../../components/PlaceDetailsHero';
import { Booking } from '../../../components/Booking';
import { Description } from '../../../components/Description';
import { Ratings } from '../../../components/Ratings';
import { Amenities } from '../../../components/Amenities';
import { ReviewsContainer } from '../../../components/ReviewsContainer';

import Map from '../../../components/Map';
import { Title } from '../../../components/Title';

import styles from '../../../styles/PlaceDetails.module.scss';

export default function PlaceDetails({ place }) {

  const {
    name,
    description,
    coordinates: center,
    location,
    price,
    website,
    imagesUrls
  } = JSON.parse(place) // Check this

  const zoom = 13
    
  return (
    <>
      <div  className={styles.back}>
        <Link href="/">
          <p><span>&#60;</span> Home</p>
        </Link>
      </div>
      <PlaceDetailsHero images={imagesUrls} name={name} website={website} location={location}/>
      
      <section className={styles.intro}>
        <div className={styles.descriptionContainer}>
          <Description content={description}/>
        </div>
        <div className={styles.bookingContainer}>
          <Booking pricePerNight={price} />
        </div>
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

      {
        center.lat && center.lng && (
          <section className={styles.section}>
            <Title text='Location' />
            <Map center={center} zoom={zoom} />
          </section>
        )
      }
       
    </>
  )
}

export async function getStaticPaths() {

  await dbConnect()

  const res = await Place.find({}, 'slug')
  const places = res.map(e => ({params: {slug: e.slug}}))
  
  return {
    paths: places,
    fallback: false,
  }
}

export async function getStaticProps({params}) {

  await dbConnect()

  const res = await Place.findOne({slug: params.slug});
  
  const place = await JSON.stringify(res)
  
  return {
    props: { place },
  }
}


/*
export async function getServerSideProps({ query: { slug }}) {

  const res = await fetch(`${server}api/places/${slug}`)

  const place = await res.json();
  
  return {
      props: {
          place,
      }
  }
}
*/