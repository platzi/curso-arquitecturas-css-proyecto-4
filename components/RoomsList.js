import { RoomCard } from "./RoomCard";
import styles from '../styles/RoomsList.module.scss'

export const RoomsList = ({ rooms }) => {

    if (!rooms) {
        return (
            <div className="empty-search">
                <h3>unfortunately no rooms matched your search parameters</h3>
            </div>
        );
    }

    return (
        <section className={styles.roomsList}>
            
            <div className={styles.roomsListCenter}>
                {rooms.map(item => (
                    <RoomCard key={item._id} room={item} />
                ))}
            </div>
        </section>
    );
};
