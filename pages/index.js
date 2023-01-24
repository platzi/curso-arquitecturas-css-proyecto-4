import { server } from '../config'
import { PlacesList } from '../components/PlacesList'
//import { Slider } from '../components/Slider'
import styles from '../styles/Home.module.scss'

export default function Home({places = []}) {

  if (places.length === 0) return <h1>No hay datos</h1>
  const sliderConfig = {
    images: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80',
      'https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
      'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80'
    ], 
    width: 1000,
    height: 700
  }
  
  return (
    <div className={styles.home}>
      
      {/* <div className={styles.sliderContainer}>
        <Slider config={sliderConfig}className={styles.slider} />
      </div>  */}
      
      <div className={styles.placesListContainer}>
        <PlacesList places={places}/>
      </div>
    
    </div>
  )
}

//export async function getStaticProps() {
export async function getServerSideProps() {

  const res = await fetch(`${server}api/places/`)
  const places = await res.json()
  
  return {
    props: {
      places,
    }
  }
}