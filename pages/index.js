import { server } from '../config'
import dbConnect from '../lib/dbConnect'
import Place from '../models/Place'
import { PlacesList } from '../components/PlacesList'
import styles from '../styles/Home.module.scss'

export default function Home({places = []}) {

  if (places.length === 0) return <h1>No hay datos</h1>
  
  return (
    <div className={styles.home}>
          
      <div className={styles.placesListContainer}>
        <PlacesList places={places}/>
      </div>
    
    </div>
  )
}

export async function getStaticProps() {

  await dbConnect()

  const res = await Place.find({})

  const places = await JSON.stringify(res)
  return {
    props: {
      places,
    }
  }
}


/* 
export async function getServerSideProps() {

  const res = await fetch(`${server}api/places/`)
  const places = await res.json()
  
  return {
    props: {
      places,
    }
  }
} */