import { Room } from "./Room";
import styles from '../styles/RoomsList.module.css'

export const RoomsList = ({ rooms }) => {

    if (rooms.length === 0) {
        return (
            <div className="empty-search">
                <h3>unfortunately no rooms matched your search parameters</h3>
            </div>
        );
    }

    return (
        <section className={styles.roomsList}>
            <div className={styles.roomsListCenter}>
                {rooms.map(item => {
                return <Room key={item.id} room={item} />;
                })}
            </div>
        </section>
    );
};
