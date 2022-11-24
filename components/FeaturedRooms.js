import { Title } from "./Title";
import RoomsContext from '../contexts/RoomsContext';
import { Room } from "./room";
import { Loading } from "./loading";
import { useContext } from "react";

export const FeaturedRooms = () => {

    const { rooms } = useContext(RoomsContext)

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
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <h1>{ rooms[0].fields.name }</h1>
        <div className="featured-rooms-center">
          { 
            rooms && rooms.map( room => {
              return <Room key={room.sys.id} room={room} />
            })
          }
        </div>
      </section>
    );
}
