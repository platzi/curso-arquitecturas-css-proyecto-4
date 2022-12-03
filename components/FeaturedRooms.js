import { Title } from "./Title";
import RoomsContext from '../contexts/RoomsContext';
import { Room } from "./room";
import { Loading } from "./loading";
import { useContext } from "react";
import styles from '../styles/FeaturedRooms.module.css'

export const FeaturedRooms = () => {
    
    const { rooms } = useContext(RoomsContext)
    //console.log(rooms)
    //render() {
    //let { loading, featuredRooms: rooms } = this.context;

    /* rooms.map(room => {
      return <Room key={room.id} room={room} />;
    }); */
    
    //let { loading, FeaturedRooms: rooms } = useContext(RoomContext);
    //console.log(rooms)
    /* const arr = rooms.map(room => {
        return <Room key={room.id} room={room} />;
    }); */

    return (
      <section className={styles.featuredRooms}>
        <Title title="featured rooms" />
      
        <div className={styles.featuredRoomsCenter}>
           { 
            rooms && rooms.map( room => {
              return <Room key={room.id} room={room} />
            })
          }
        </div>
        
      </section>
    );
}
