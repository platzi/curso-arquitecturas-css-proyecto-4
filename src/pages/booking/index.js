import { useRouter } from "next/router"

export default function BookingPage(){
    const router = useRouter()
    console.log("Receiving...", router.query)    
    return (
        <h1>hola</h1>
    )
}