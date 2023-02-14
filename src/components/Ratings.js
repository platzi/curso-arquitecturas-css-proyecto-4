import { Rating } from '../components/Rating';
import styles from '../styles/Ratings.module.scss';


export const Ratings = ({ratings})=> {
    return (
        <div className={styles.ratings}>
          <div className={styles.ratingsContainer}>
            {
              ratings.map((e, i) => {
                return <Rating caption={e.caption} mark={e.mark.toFixed(1)} key={i} />
              })
            }
          </div>  
        </div>
    )
}