import { Rating } from '../components/Rating';
import styles from '../styles/Ratings.module.scss';


export const Ratings = ()=> {
    return (
        <div className={styles.ratings}>
          <div className={styles.ratingsContainer}>
            {
              [
                {caption: 'Limpieza', mark: 5},
                {caption: 'Comunicación', mark: 4},
                {caption: 'Llegada', mark: 2},
                {caption: 'Fiabilidad', mark: 3},
                {caption: 'Ubicación', mark: 2.5},
                {caption: 'Precio', mark: 4.9},
              ].map((e, i) => {
                return <Rating caption={e.caption} mark={e.mark.toFixed(1)} key={i} />
              })
            }
          </div>  
        </div>
    )
}