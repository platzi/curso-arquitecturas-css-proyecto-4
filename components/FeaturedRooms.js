import { Title } from "./Title";
import RoomsContext from '../contexts/RoomsContext';
import { RoomCard } from "./RoomCard";
//import { Loading } from "./loading";
import { useContext } from "react";
import styles from '../styles/FeaturedRooms.module.css'

export const FeaturedRooms = () => {
    
    let { rooms } = useContext(RoomsContext)
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

    rooms = rooms.filter( r => r.featured == 1 )
    return (
      <section className={styles.featuredRooms}>
        <Title title="featured rooms" />
      
        <div className={styles.featuredRoomsCenter}>
           { 
            rooms && rooms.map( room => {
              return <RoomCard key={room.id} room={room} />
            })
          }
        </div>
        
      </section>
    );
}
