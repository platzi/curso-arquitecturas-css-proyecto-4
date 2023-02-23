import { useRouter } from "next/router"


export default function TestPage(){
    const router = useRouter()
    const {user} = router.query 

    if (!user) router.push({pathname: '/testing/login', query: router.query})
    return (
        <div className='' style={{margin:200}}>
            <p>Hello</p>
            <h1>{user}</h1>
            
        </div>
        
    )
}
