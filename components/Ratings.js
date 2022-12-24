import { Rating } from '../components/Rating';
import styles from '../styles/Ratings.module.scss';


export const Ratings = ()=> {
    return (
        <div className={styles.indicators}>
            {
              [
                {caption: 'Limpieza', rating: 5},
                {caption: 'Comunicación', rating: 4},
                {caption: 'Llegada', rating: 2},
                {caption: 'Fiabilidad', rating: 3},
                {caption: 'Ubicación', rating: 2.5},
                {caption: 'Precio', rating: 4.9},
              ].map((e, i) => {
                return <Rating caption={e.caption} rating={e.rating} key={i} />
              })
            }
            
          </div>
    )
}