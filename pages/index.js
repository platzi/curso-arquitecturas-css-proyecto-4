import Head from 'next/head'
import { RoomsContainer } from '../components/RoomsContainer'
import { Slider } from '../components/Slider'


export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Resort</title>
      </Head>
      <Slider />

      <RoomsContainer />

    </div>
  )
}
