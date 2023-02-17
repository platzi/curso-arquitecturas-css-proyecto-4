import { useRouter } from "next/router"
import { format, addDays} from "date-fns";
import { useForm } from "react-hook-form"

export default function BookingPage(){
    const router = useRouter()
    //console.log("Receiving...", router.query)    
    const {
        checkin,
        checkout,
        adults,
        children,
        infants
    } = router.query

    const { register, formState: { errors }, handleSubmit, control } = useForm();

    const errorMessage = (error) => {
        return <div /* className={styles.errorMessage} */>{error}</div>;
    };

    const onSubmit = (data) => {
        data = {
            ...data, 
            checkIn: '2023-02-25', 
            checkOut: '2023-02-28', 
            placeId: '63ed1de0516194026f84468b', 
            guestId: 'arturosimonore@gmail.com', 
            totalPrice: 156
        }
        
        const response = fetch('/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).catch(error => console.log(error))
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
                        defaultValue={checkin}
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
                            defaultValue={checkout}
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
                        defaultValue={adults} 
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
                        defaultValue={children} 
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
                        defaultValue={infants}
                        />
                    </div>
                    {errors.infants?.type === 'required' && errorMessage("This field is required")}
                </div>

                <input className='' type="submit" value="Book now" /> 
            </form>
        </div>
        
    )
}