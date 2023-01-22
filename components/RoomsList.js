import { PlaceCard } from "./PlaceCard";
import styles from '../styles/RoomsList.module.scss'

export const RoomsList = ({ rooms }) => {

    return (
        <section className={styles.roomsList}>
            
            {rooms.map(item => (
                <PlaceCard key={item._id} place={item} />
            ))}
            
        </section>
    );
};
