import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import { useState } from 'react';

export const DatesPicker = () => {
  const [selected, setSelected] = useState();

  /* let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  } */
  return (
    <DayPicker
      mode="range"
      selected={selected}
      onSelect={setSelected}
      /* footer={footer} */
      numberOfMonths={2}
      pagedNavigation
      showOutsideDays
      fixedWeeks 
    />
  );
}