import { useState } from 'react';
import styles from '../styles/Booking.module.scss';


export const Booking = () => {

  const [formData, setFormData] = useState({});

  const [errors, setErrors] = useState([])
  
  const handleSubmit = (event)=> {

    event.preventDefault();
    validateForm();
    if (errors.length > 0) {
      console.log(errors)
      return
    }
    console.log(formData)

  }

  const validateForm = () => {
    if (!formData.checkin || !formData.checkout) {
      console.log('generando errores...')
      setErrors(
        [
          ...errors,
          { invalidRange: { message: 'Dates range invalid.' }}
        ]
      )
    }
  }

  const handleChange = (event) => {
    
    setFormData({
      ...formData,
      [event.target.id]: event.target.value
    })
  }

  return (
    <div className={styles.booking}>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.range}>
          <div className={styles.date}>
            <label htmlFor="checkin"> Check in: </label>
            <input type="date" value={ formData.checkin } onChange={ handleChange } id='checkin' />
          </div>  
          
          <div className={styles.date}>
            <label htmlFor="checkout"> Check out: </label>
            <input type="date" value={ formData.checkout } onChange={ handleChange } id='checkout' />
          </div>
        </div>
        {errors.invalidRange && <span>{errors.invalidRange.message}</span>}
        
        <div className={styles.quantitySetter}>
          <label htmlFor="adults"> Adults <span>(Age 13+)</span>: </label>
          <input type="number" value={ formData.adults } onChange={ handleChange } id='adults' min={0} max={5} />
        </div>
        
        <div className={styles.quantitySetter}>
          <label htmlFor="children">Children <span>(Ages 2-12)</span>: </label>
          <input type="number" value={ formData.children } onChange={ handleChange } id='children' min={0} max={5} />
        </div>
        
        <div className={styles.quantitySetter}>
          <label htmlFor="infants">Infants <span>(Under 2)</span>: </label>
          <input type="number" value={ formData.infants } onChange={ handleChange } id='infants' min={0} max={5} />
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