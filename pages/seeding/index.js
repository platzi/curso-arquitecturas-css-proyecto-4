import { useRouter } from 'next/router'
import {rooms} from '../../data/rooms'

export default function Seeding(){

    const router = useRouter()

    const LoadData = async () => {
        try {
            const res = await fetch('/api/places/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(rooms)
            })
            //router.push('/')
        } catch (error) {
            console.log('Failed to add place')
        }

    }

    return (
        <>

            <br />
            <br />
            <br />
            <br />

            <h1>Seeding data...</h1>

            <button onClick={LoadData}>Load data...</button>
        
        </>
    )
}