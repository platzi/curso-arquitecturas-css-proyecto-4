import { useRouter } from "next/router"


export default function TestPage(){
    const router = useRouter()
    
    const query = {...router.query, user: 'arturo'}
    
    console.log(query)

    router.push({pathname: '/testing/destination', query})
    return (
        <div className='' style={{margin: 100}}>
            
            <h1>Testing</h1>
        </div>
        
    )
}
