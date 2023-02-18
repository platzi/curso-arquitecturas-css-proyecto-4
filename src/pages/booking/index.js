import { useRouter } from "next/router"
import { format, addDays} from "date-fns"
import { useForm } from "react-hook-form"
import { getServerSession } from "next-auth"
import { authOptions } from '../api/auth/[...nextauth]'

export default function BookingPage({sessionInfo}){
    const router = useRouter()
    //console.log("Receiving...", router.query) 
    const firstName = sessionInfo.user.firstName
    const lastName = sessionInfo.user.lastName
    const {
        placeId,
        checkin,
        checkout,
        adults,
        children,
        infants,
        pricePerNight
    } = router.query

    const { register, formState: { errors }, handleSubmit, control } = useForm({
        defaultValues: {
            firstName,
            lastName,
            checkin, 
            checkout,
            adults,
            children,
            infants
        }
    });

    const errorMessage = (error) => {
        return <div /* className={styles.errorMessage} */>{error}</div>;
    };

    const onSubmit = async data => {
        
        data = {
            ...data, 
            placeId: placeId, 
            guestId: sessionInfo.user.email, 
            totalPrice: pricePerNight // Make calculations
        }
        // console.log(data)
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
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/** First name */}
                <div className=''>
                    <div>
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
                <div className=''>
                    <div>
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
                <div className=''>
                    <div>
                        {/* <label htmlFor="checkin"> Check in date: </label> */}
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
                <div className=''>
                    <div>
                        {/* <label htmlFor="checkout"> Check out date: </label> */}
                        <input
                            {...register("checkout", { required: true, valueAsDate: true, validate : (v, fv) => v > fv.checkin })} 
                            id="checkout"
                            type="date" 
                            required={true}
                            min={format(addDays(new Date(), 1), 'yyyy-MM-dd')}
                        />
                    </div>
                    {errors.checkout?.type === 'required' && errorMessage("This field is required")}
                </div>

                {/** Number adults */}
                <div className=''>
                    <div>
                        {/* <label htmlFor="adults"> Adults <span>(Age 13+)</span>: </label> */}
                        <input 
                            {...register("adults", { required: true, min: 0, max: 5 })} 
                            type="number"
                        />
                    </div>
                    {errors.adults?.type === 'required' && errorMessage("This field is required")}
                </div>

                {/** Number children */}
                <div className=''>
                    <div>
                        {/* <label htmlFor="children">Children <span>(Ages 2-12)</span>: </label> */}
                        <input 
                            {...register("children", { required: true, min: 0, max: 5 })} 
                            type="number" 
                        />
                    </div>
                    {errors.children?.type === 'required' && errorMessage("This field is required")}
                </div>

                {/** Number infants */}
                <div className=''>
                    <div>
                        {/* <label htmlFor="infants">Infants <span>(Under 2)</span>: </label> */}
                        <input 
                            {...register("infants", { required: true, min: 0, max: 5 })} 
                            type="number"
                        />
                    </div>
                    {errors.infants?.type === 'required' && errorMessage("This field is required")}
                </div>

                <input className='' type="submit" value="Book now" /> 
            </form>
        </div>
        
    )
}


export async function getServerSideProps(context) {

    const session = await getServerSession(context.req, context.res, authOptions)
    console.log('existe session:', session)
    if (!session) {
        return { redirect: { destination: '/login?redirect=booking', permanent: false, } }
    }

    return { props: { sessionInfo: JSON.parse(JSON.stringify(session)),},}
}