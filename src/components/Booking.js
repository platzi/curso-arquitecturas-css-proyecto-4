import { useRouter } from 'next/router';
import { useForm, useWatch } from 'react-hook-form' 
import { format, addDays} from "date-fns";
import styles from '../styles/Booking.module.scss'

const errorMessage = (error) => {
  return <div className={styles.errorMessage}>{error}</div>;
};


export const Booking = ({pricePerNight, placeId, name}) => {

  const { register, formState: { errors }, handleSubmit, control } = useForm({
    defaultValues: {
      checkin: format(Date.now(), 'yyyy-MM-dd'),
      checkout: format(addDays(Date.now(), 1), 'yyyy-MM-dd'),
      adults: 1,
      children: 0,
      infants: 0
    }
  });

  const router = useRouter()

  const onSubmit = (data)=> {
    
    router.push({
      pathname: '/booking',
      query: {
        placeId,
        checkin: format(data.checkin, 'yyyy-MM-dd'), 
        checkout: format(data.checkout, 'yyyy-MM-dd'),
        adults: data.adults,
        children: data.children,
        infants: data.infants,
        pricePerNight,
        name
      }
    })
    
  }

  const checkin = useWatch({control, name: 'checkin'})
  const checkout = useWatch({control, name: 'checkout'})

  return (
    <div className={styles.booking}>
      
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        
        <div className={styles.formField}>
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
        
        <div className={styles.formField}>
          <div>
            <label htmlFor="checkout"> Check out date: </label>
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
        
        <div className={styles.formField}>
          <div>
            <label htmlFor="adults"> Adults <span>(Age 13+)</span>: </label>
            <input 
              {...register("adults", { required: true, min: 1, max: 5 })} 
              type="number"  
            />
          </div>
          {errors.adults?.type === 'required' && errorMessage("This field is required")}
            
        </div>
        
        <div className={styles.formField}>
          <div>
            <label htmlFor="children">Children <span>(Ages 2-12)</span>: </label>
            <input 
              {...register("children", { required: true, min: 0, max: 5 })} 
              type="number"  
            />
          </div>
          {errors.children?.type === 'required' && errorMessage("This field is required")}
        </div>
        
        <div className={styles.formField}>
          <div>
            <label htmlFor="infants">Infants <span>(Under 2)</span>: </label>
            <input 
              {...register("infants", { required: true, min: 0, max: 5 })} 
              type="number" 
            />
          </div>
          {errors.infants?.type === 'required' && errorMessage("This field is required")}
        </div>

        <div className={styles.amount}>
            <div className={styles.totalNights}>
              <p>{checkin && checkout ?  (new Date(checkout) - new Date(checkin)) / 86400000 : undefined} nigths</p>
              
            </div>
            
            <div className={styles.totalPrice}>
              <input 
                {...register("totalPrice", { required: true })}
                readOnly={true} 
                id='totalPrice'
                type="number" 
                value={ checkin && checkout ? ((new Date(checkout) - new Date(checkin)) / 86400000 * pricePerNight).toFixed(2) : 0} 
              />  
            </div>
        </div>
        
        <input className={styles.button} type="submit" value="Book now" />    
      
      </form>
        
    </div>
  );
}