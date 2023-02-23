// import { server } from '../../../config'
import dbConnect from '../../../lib/dbConnect'
import Place from '../../../models/Place';
import Link from 'next/link'

import { PlaceDetailsHero } from '../../../components/PlaceDetailsHero';
import { Description } from '../../../components/Description';
import { Ratings } from '../../../components/Ratings';
import { Amenities } from '../../../components/Amenities';
import { ReviewsContainer } from '../../../components/ReviewsContainer';

import Map from '../../../components/Map';
import { Title } from '../../../components/Title';

import styles from '../../../styles/PlaceDetails.module.scss';

export default function PlaceDetails({ place }) {

  const {
    _id: placeId,
    name,
    description,
    coordinates: center,
    location,
    generalRating,
    price,
    priceBefore,
    imagesUrls,
    reviews,
    ratings,
    slug
  } = JSON.parse(place) // Check this

  const zoom = 13
    
  return (
    <>
      <div  className={styles.back}>
        <Link href="/">
          <p><span>&#60;</span> Home</p>
        </Link>
      </div>
      <PlaceDetailsHero images={imagesUrls} name={name} generalRating={generalRating} location={location} price={price} />
      
      <section className={styles.intro}>
        <div className={styles.descriptionContainer}>
          <Description content={description}/>
        </div>
        <div className={styles.price}>
          <p>Price per night: </p>
           { priceBefore ? <p className={styles.priceBefore}> `$ ${priceBefore}`</p> : undefined}
          <p className={styles.finalPrice}>$ {price.toFixed(2)}</p>
          <Link href={{pathname: '/booking', query: {placeId, name, price, imagesUrls, slug}}}>
            Book now
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <Title text='Amenities' />
        <Amenities />
      </section>

      <section className={styles.section}>
        <Title text='Ratings' />
        <Ratings ratings={ratings}/>
      </section>

      <section className={styles.section}>
        <Title text='Reviews' />
        <ReviewsContainer reviews={reviews}/>
      </section>

      {/* {
        center.lat && center.lng && (
          <section className={styles.section}>
            <Title text='Location' />
            <Map center={center} zoom={zoom} />
          </section>
        )
      }  */}
       
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