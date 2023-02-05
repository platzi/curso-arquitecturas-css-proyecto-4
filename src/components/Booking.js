//import { useState } from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form' 
import styles from '../styles/Booking.module.scss'

const errorMessage = (error) => {
  return <div className={styles.errorMessage}>{error}</div>;
};


export const Booking = ({pricePerNight}) => {

  const [checkin, setCheckin] = useState(null)
  const [checkout, setCheckout] = useState(null)
  const { register, formState: { errors }, handleSubmit } = useForm();
  
  const onSubmit = (data)=> {

    console.log('data');
    
  }

  const handleChange = (event) => {
    if (event.target.id === "checkin") {
      setCheckin(new Date(event.target.value))
      
    } else if (event.target.id === "checkout") {
      
      setCheckout(new Date(event.target.value))
    }
  }

  const validateCheckinDate = (value) => {
    return value >= Date.now()
  }

  return (
    <div className={styles.booking}>
      
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        
        <div className={styles.formField}>
          <div>
            <label htmlFor="checkin"> Check in date: </label>
            <input 
              {...register("checkin", { required: true, valueAsDate: true, validate: v => v >= new Date() })} 
              id="checkin"
              type="date" 
              onChange={ handleChange }  
            />
          </div>
          {errors.checkin?.type === 'required' && errorMessage("This field is required")}
        </div>  
        
        <div className={styles.formField}>
          <div>
            <label htmlFor="checkout"> Check out date: </label>
            <input
              {...register("checkout", { required: true, valueAsDate: true, validate: (v, fv) => v > fv.checkin})} 
              id="checkout"
              type="date" 
              onChange={ handleChange } 
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
              onChange={ handleChange }
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
              onChange={ handleChange }
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
              onChange={ handleChange } 
              defaultValue={0}
            />
          </div>
          {errors.infants?.type === 'required' && errorMessage("This field is required")}
        </div>

        <div className={styles.amount}>
            <div className={styles.totalNights}>
              {checkin && checkout && <p>{(checkout - checkin) / 1000 / 86400} nights</p>}
            </div>
            
            <div className={styles.totalPrice}>
              <span>$ {(checkout - checkin) / 1000 / 86400 * pricePerNight }</span>
            </div>
        </div>
        
        <input className={styles.button} type="submit" value="Reservar" />    
      
      </form>
        
    </div>
  );
}