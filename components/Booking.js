//import { useState } from 'react'
import { useForm } from 'react-hook-form' 
import styles from '../styles/Booking.module.scss'

const errorMessage = (error) => {
  return <div className={styles.errorMessage}>{error}</div>;
};


export const Booking = () => {

  const { register, formState: { errors }, handleSubmit } = useForm();
  
  const onSubmit = (event)=> {

    event.preventDefault();
    
  }

  const handleChange = () => {

  }

  return (
    <div className={styles.booking}>
      
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.range}>
          <div className={styles.date}>
            <label htmlFor="checkin"> Check in: </label>
            <input 
              {...register("checkin", { required: true })} 
              type="date" 
              onChange={ handleChange }  
            />
            {errors.checkin?.type === 'required' && errorMessage("This field is required")}
          </div>  
          
          <div className={styles.date}>
            <label htmlFor="checkout"> Check out: </label>
            <input
              {...register("checkout", { required: true })} 
              type="date" 
              onChange={ handleChange } 
            />
            {errors.checkout?.type === 'required' && errorMessage("This field is required")}
          </div>
        </div>
        
        <div className={styles.quantitySetter}>
          <label htmlFor="adults"> Adults <span>(Age 13+)</span>: </label>
          <input 
            {...register("adults", { required: true, min: 0, max: 5 })} 
            type="number" 
            onChange={ handleChange }
            defaultValue={0} 
          />
          {errors.adults?.type === 'required' && errorMessage("This field is required")}
        </div>
        
        <div className={styles.quantitySetter}>
          <label htmlFor="children">Children <span>(Ages 2-12)</span>: </label>
          <input 
            {...register("children", { required: true, min: 0, max: 5 })} 
            type="number" 
            onChange={ handleChange }
            defaultValue={0} 
          />
          {errors.children?.type === 'required' && errorMessage("This field is required")}
        </div>
        
        <div className={styles.quantitySetter}>
          <label htmlFor="infants">Infants <span>(Under 2)</span>: </label>
          <input 
            {...register("infants", { required: true, min: 0, max: 5 })} 
            type="number" 
            onChange={ handleChange } 
            defaultValue={0}
          />
        </div>

        <div className={styles.amount}>
            <span>7 noches</span>
            <span>USD 50.00</span>
        </div>
        
        <input className={styles.button} type="submit" value="Reservar" />    
      
      </form>
        
    </div>
  );
}