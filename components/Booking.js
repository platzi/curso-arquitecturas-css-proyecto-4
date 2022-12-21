import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import { useFormik } from 'formik';
import 'react-day-picker/dist/style.css';

import { useState } from 'react';
import styles from '../styles/Booking.module.scss';

export const Booking = () => {
  const [selected, setSelected] = useState();

  /* let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  } */

  const formik = useFormik({
    initialValues: {
      from: '2022-12-04',
      to: '2022-12-05',
      adults: 0,
      childs: 0,
      babys: 0
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 5));
    }
  });

  return (
    <div className={styles.booking}>
      <DayPicker
        mode="range"
        selected={selected}
        onSelect={setSelected}
        /* footer={footer} */
        numberOfMonths={2}
        pagedNavigation
        showOutsideDays
        fixedWeeks 
        className={styles.dayPicker}
        
      />
      <form className={styles.form} onSubmit={formik.handleSubmit} >
        <div className={styles.fromTo}>
          <label htmlFor="from">from</label>
          <input
            id="from"
            name="from"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.from}
          />

          <label htmlFor="to">to</label>
          <input
            id="to"
            name="to"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.to}
          />
        </div>
        <div className={styles.adults}>
          <h6>Adults</h6>
          <label htmlFor="adults">Edad: 13 a más</label>
          <div>-</div>
          <input
            id="adults"
            name="adults"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.adults}
            readOnly
          />
          <div>+</div>

        </div>
      <button type="submit">Reservar</button>


      </form>
    </div>
  );
}