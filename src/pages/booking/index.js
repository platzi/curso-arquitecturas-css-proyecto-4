import { useRouter } from "next/router"
import { format, addDays} from "date-fns"
import { useForm } from "react-hook-form"
import { useSession } from "next-auth/react"
import styles from '../../styles/BookingPage.module.scss'
import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function BookingPage(){
    const router = useRouter()
    const { data: session, status } = useSession()

    /* if (status === 'loading') {
        return <p>Loading...</p>
    } */

    if (status==='unauthenticated') {
        
        const query = {...router.query, destination: '/booking'}
        router.push({pathname: '/login', query})    
    }
    
    const firstName = session?.user.firstName
    const lastName = session?.user.lastName
    const {
        placeId,
        name, 
        price,
        imageURL,
        slug
    } = router.query

    const { register, formState: { errors }, handleSubmit, control, watch, setValue } = useForm({
        defaultValues: {
            firstName,
            lastName,
            //checkin: format(Date.now(), 'yyyy-MM-dd'),
            //checkout: format(addDays(Date.now(), 1), 'yyyy-MM-dd'),
            adults: 1,
            children: 0,
            infants: 0,
            pricePerNight: price,
        }
    });

    const watchedCheckin = watch("checkin")
    const watchedCheckout = watch("checkout")
    
    useEffect(()=> {
        if (!isNaN(watchedCheckin) && !isNaN(watchedCheckout)) {
            setValue('nights', (watchedCheckout - watchedCheckin) / 86400000)
            setValue('totalPrice', (watchedCheckout - watchedCheckin) / 86400000 * price)
        }
        
    }, [watchedCheckout, watchedCheckin, price])

    const errorMessage = (error) => {
        return <div /* className={styles.errorMessage} */>{error}</div>;
    };

    const onSubmit = async data => {
        
        data = {
            ...data, 
            placeId: placeId, 
            guestId: session.user.email, 
            totalPrice: (watchedCheckout - watchedCheckin) / 86400000 * price // Make calculations
        }
        
        const response = await fetch('/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).catch(error => console.log(error))

        if (response.status === 201) router.push('/thankYou')
    }

    return (
        <div className={styles.bookingPage}>
            
            <div className={styles.imageContainer}>
                <Image
                    //src={imagesUrls[0]}
                    src={imageURL}
                    width={800}
                    height={500}
                    alt=''
                /> 
                <Link href={`/places/${slug}`}>{name}</Link>  
            </div>

            <div className={styles.formContainer}>
                
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    {/** First name */}
                    <div className={styles.firstName}>
                        <div>
                            <label htmlFor="firstName">First name:</label>
                            <input 
                                {...register("firstName", { required: true })} 
                                id="firstName"
                                type="text"
                                placeholder="First name"
                            />
                        </div>
                        {errors.firstName?.type === 'required' && errorMessage("This field is required")}
                    </div>

                    {/** Last name */}
                    <div className={styles.lastName}>
                        <div>
                            <label htmlFor="firstName">Last name:</label>
                            <input 
                                {...register("lastName", { required: true })} 
                                id="lastName"
                                type="text"
                                placeholder="Last name"
                            />
                        </div>
                        {errors.lastName?.type === 'required' && errorMessage("This field is required")}
                    </div>

                    {/** Check in */}
                    <div className={styles.checkin}>
                        <div>
                            <label htmlFor="checkin"> Check in date: </label>
                            <input 
                            {...register("checkin", { required: true, valueAsDate: true, validate: v => v >= Date.now() })} 
                            id="checkin"
                            type="date"
                            min={format(Date.now(), 'yyyy-MM-dd')}
                            />
                        </div>

                        {errors.checkin?.type === 'required' && errorMessage("This field is required")}
                    </div>

                    {/** Check out */}
                    <div className={styles.checkout}>
                        <div>
                            <label htmlFor="checkout"> Check out date: </label>
                            <input
                                {...register("checkout", { required: true, valueAsDate: true, validate : (v, fv) => v > fv.checkin })} 
                                id="checkout"
                                type="date" 
                                min={format(addDays(new Date(), 1), 'yyyy-MM-dd')}
                            />
                        </div>
                        {errors.checkout?.type === 'required' && errorMessage("This field is required")}
                    </div>

                    {/** Number adults */}
                    <div className={styles.adults}>
                        <div>
                            <label htmlFor="adults"> Adults <span>(Age 13+)</span>: </label>
                            <input 
                                {...register("adults", { required: true, min: 0, max: 5 })} 
                                type="number"
                            />
                        </div>
                        {errors.adults?.type === 'required' && errorMessage("This field is required")}
                    </div>

                    {/** Number children */}
                    <div className={styles.children}>
                        <div>
                            <label htmlFor="children">Children <span>(Ages 2-12)</span>: </label>
                            <input 
                                {...register("children", { required: true, min: 0, max: 5 })} 
                                type="number" 
                            />
                        </div>
                        {errors.children?.type === 'required' && errorMessage("This field is required")}
                    </div>

                    {/** Number infants */}
                    <div className={styles.infants}>
                        <div>
                            <label htmlFor="infants">Infants <span>(Under 2)</span>: </label>
                            <input 
                                {...register("infants", { required: true, min: 0, max: 5 })} 
                                type="number"
                            />
                        </div>
                        {errors.infants?.type === 'required' && errorMessage("This field is required")}
                    </div>

                    {/** total nights */}
                    <div className={styles.nights}>
                        <div>
                            <label htmlFor="nights">Nights: </label>
                            <input 
                                {...register("nights")} 
                                type="number"
                                readOnly
                            />
                        </div>
                    </div>

                    {/** price per night */}
                    <div className={styles.pricePerNight}>
                        <div>
                            <label htmlFor="pricePerNight">Price per night $: </label>
                            <input 
                                {...register("pricePerNight")} 
                                type="number"
                                readOnly
                            />
                        </div>
                    </div>

                    {/** Total price */}
                    <div className={styles.totalPrice}>
                        <div>
                            <label htmlFor="totalPrice">Total price $: </label>
                            <input 
                                {...register("totalPrice")} 
                                type="number"
                                readOnly
                            />
                        </div>
                    </div>

                    <input className='' type="submit" value="Book now" /> 
                </form>
            </div>
        </div>
        
    )
}

/*
export async function getServerSideProps(context) {

    const session = await getServerSession(context.req, context.res, authOptions)
   
    if (!session) {
        return { redirect: { destination: '/login?redirect=booking', permanent: false, } }
    }

    return { props: { sessionInfo: JSON.parse(JSON.stringify(session)),},}
}
*/