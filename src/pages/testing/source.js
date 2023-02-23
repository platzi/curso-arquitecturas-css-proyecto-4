// import { server } from '../../../config'
//import dbConnect from '../lib/dbConnect'
import Link from 'next/link'

//import styles from '../../styles/PlaceDetails.module.scss';

export default function PlaceDetails() {
 
  const query = {
    placeId : 'xxx', 
    name: 'poroma', 
    price: 69, 
    imagesUrls: '', 
    slug: '/'

  }
  return (
    
    <>
      <section className=''>
        <div className='' style={{height: 100, marginTop: 100}}>
          <p>Price per night: </p>
          <Link href={{pathname: '/testing/destination', query}}>
            Book now
          </Link>
        </div>
      </section>      
    </>
  )
}