import Head from 'next/head'
import { RoomsContainer } from '../components/RoomsContainer'
//import { Hero } from '../components/Hero'
import { Slider } from '../components/Slider'


export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Resort</title>
      </Head>

      {/* <Hero 
        imageUrl='https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
      /> */}
      <Slider />

      <RoomsContainer />

    </div>
  )
}
