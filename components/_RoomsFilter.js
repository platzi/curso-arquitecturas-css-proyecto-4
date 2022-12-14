import RoomsContext from '../contexts/RoomsContext';
import { useContext } from "react";
import { Title } from "./Title";
import styles from '../styles/RoomsFilter.module.css';

// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

export const RoomsFilter = ({ rooms }) => {

    const handleChange = () => {

    }

  // react hooks
    const context = useContext(RoomsContext);
    const {
    //handleChange,
    //type,
    //capacity,
    price,
    //minPrice,
    //maxPrice,
    //minSize,
    //maxSize,
    //breakfast,
    //pets
  } = context;

  // get unique types
  let types = getUnique(rooms, "type");
  // add all
  types = ["all", ...types];
  // map to jsx
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  // get unique capacity
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));
  return (
    <section className={styles.filterContainer}>
      <Title title="search rooms" />
      <form className={styles.filterForm}>
        {/* select type */}
        <div className={styles.formGroup}>
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            onChange={handleChange}
            className={styles.formControl}
            /* value={type} */
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
        
        {/* guests  */}
        <div className={styles.formGroup}>
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacity"
            onChange={handleChange}
            className={styles.formControl}
           /*  value={capacity} */
          >
            {people}
          </select>
        </div>
        {/* end of guests */}
        
        {/* room price */}
        <div className={styles.formGroup}>
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            /* min={minPrice} */
            /* max={maxPrice} */
            id="price"
            value={price}
            onChange={handleChange}
            className={styles.formControl}
          />
        </div>
        {/* end of room price*/}
        
        {/* size */}
        <div className={styles.formGroup}>
          <label htmlFor="price">room size </label>
          <div className={styles.sizeInputs}>
            <input
              type="number"
              name="minSize"
              /* value={minSize} */
              onChange={handleChange}
              className={styles.sizeInput}
            />
            <input
              type="number"
              name="maxSize"
              /* value={maxSize} */
              onChange={handleChange}
              className={styles.sizeInput}
            />
          </div>
        </div>
        {/* end of select type */}

        {/* extras */}
        <div className={styles.formGroup}>
          <div className={styles.singleExtra}>
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              /* checked={breakfast} */
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className={styles.singleExtra}>
            <input
              type="checkbox"
              name="pets"
              /* checked={pets} */
              onChange={handleChange}
            />
            <label htmlFor="breakfast">pets</label>
          </div>
        </div>
        {/* end of extras type */}
      </form>
    </section>
  );
};
