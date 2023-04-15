import { PlaceCard } from "./PlaceCard";
import styles from '../styles/PlacesList.module.scss'

export const PlacesList = ({ places }) => {

    return (
        <section className={styles.placesList}>
            
            {
                // Check the next line 
                JSON.parse(places).map(item => (
                    <PlaceCard key={item._id} place={item} />
                ))
            }
            
        </section>
    );
};
