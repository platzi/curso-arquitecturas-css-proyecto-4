import { Indicator } from '../components/Indicator';
import styles from '../styles/Indicators.module.scss';


export const Indicators = ()=> {
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
                return <Indicator caption={e.caption} rating={e.rating} key={i} />
              })
            }
            
          </div>
    )
}