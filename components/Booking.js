import { useState } from 'react';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import styles from '../styles/Booking.module.scss';


export const Booking = () => {
  const [selectedRange, setSelectedRange] = useState();
  
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    adults: 0,
    children: 0,
    infants: 0
  });

  const handleRangeSelect = (range)=> {

    setSelectedRange(range);
    
    if (range?.from) {
      setFormData({
        ...formData,
        ['checkIn']: format(range.from, 'y-MM-dd')
      });
    } else {
      //setFromValue('');
    }
    if (range?.to) {
      setFormData({
        ...formData,
        ['checkOut']: format(range.to, 'y-MM-dd')
      });
    } else {
      //setToValue('');
    }
    
  }
  
  const handleSubmit = (event)=> {
    event.preventDefault();
    console.log(formData)
  }

  const handleChange = (event) => {
    
    setFormData({
      ...formData,
      [event.target.id]: event.target.value
    })
  }

  return (
    <div className={styles.booking}>
      <DayPicker
      
        mode="range"
        selected={ selectedRange }
        onSelect={ handleRangeSelect }
        numberOfMonths={2}
        pagedNavigation
        showOutsideDays
        fixedWeeks 
        className={styles.dayPicker}
        
      />

      <form onSubmit={handleSubmit} className={styles.form}>
      
        <div className={styles.date}>
          <label htmlFor="checkIn"> Check in: </label>
          <input type="date" value={ formData.checkIn } onChange={ handleChange } id='checkin' readOnly />
        </div>  
        
        <div className={styles.date}>
          <label htmlFor="checkOut"> Check out: </label>
          <input type="date" value={ formData.checkOut } onChange={ handleChange } id='checkout' readOnly />
        </div>

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