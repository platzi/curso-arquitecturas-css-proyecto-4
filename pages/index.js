import Head from 'next/head'
import { RoomsContainer } from '../components/RoomsContainer'
import { Slider } from '../components/Slider'


export default function Home() {
  return (
    <div className=''>
      
      <Slider />

      <RoomsContainer />

    </div>
  )
}
