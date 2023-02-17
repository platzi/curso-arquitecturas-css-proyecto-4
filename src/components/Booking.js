import { useRouter } from 'next/router';
import { useForm, useWatch } from 'react-hook-form' 
import {differenceInCalendarDays, format, addDays} from "date-fns";
import styles from '../styles/Booking.module.scss'

const errorMessage = (error) => {
  return <div className={styles.errorMessage}>{error}</div>;
};


export const Booking = ({pricePerNight}) => {

  const { register, formState: { errors }, handleSubmit, control } = useForm();
  const router = useRouter()

  const onSubmit = (data)=> {
    console.log(data)
    router.push({
      pathname: '/booking',
      query: {checkin: data.adults}
    })
    
  }

  const checkIn = useWatch({control, name: 'checkin'})
  const checkOut = useWatch({control, name: 'checkout'})

  return (
    <div className={styles.booking}>
      
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        
        <div className={styles.formField}>
          <div>
            <label htmlFor="checkin"> Check in date: </label>
            <input 
              {...register("checkin", { required: true, valueAsDate: true })} 
              id="checkin"
              type="date"
              min={format(new Date(), 'yyyy-MM-dd')}
              max={format(addDays(new Date(), 10), 'yyyy-MM-dd')}
              /* onChange={ handleChange }   */
            />
          </div>
          {errors.checkin?.type === 'required' && errorMessage("This field is required")}
        </div>  
        
        <div className={styles.formField}>
          <div>
            <label htmlFor="checkout"> Check out date: </label>
            <input
              {...register("checkout", { required: true, valueAsDate: true })} 
              id="checkout"
              type="date" 
              required={true}
              min={format(addDays(new Date(), 1), 'yyyy-MM-dd')}
              max={format(addDays(new Date(), 16), 'yyyy-MM-dd')}
              /* onChange={ handleChange }  */
            />
          </div>
          {errors.checkout?.type === 'required' && errorMessage("This field is required")}
        </div>
        
        <div className={styles.formField}>
          <div>
            <label htmlFor="adults"> Adults <span>(Age 13+)</span>: </label>
            <input 
              {...register("adults", { required: true, min: 0, max: 5 })} 
              type="number" 
              /* onChange={ handleChange } */
              defaultValue={0} 
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
              /* onChange={ handleChange } */
              defaultValue={0} 
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
              /* onChange={ handleChange } */ 
              defaultValue={0}
            />
          </div>
          {errors.infants?.type === 'required' && errorMessage("This field is required")}
        </div>

        <div className={styles.amount}>
            <div className={styles.totalNights}>
              <p>{checkIn && checkOut ?  (checkOut - checkIn) / 86400000 : undefined} nigths</p>
              
            </div>
            
            <div className={styles.totalPrice}>
              <input 
                {...register("totalPrice", { required: true })}
                readOnly={true} 
                id='totalPrice'
                type="number" 
                value={ checkIn && checkOut ? ((checkOut - checkIn) / 86400000 * pricePerNight).toFixed(2) : 0} 
                
              />  
            </div>
        </div>
        
        <input className={styles.button} type="submit" value="Book now" />    
      
      </form>
        
    </div>
  );
}