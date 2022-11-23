import { Title } from "./Title";
//import { RoomContext } from "../context";
import { Room } from "./room";
import { Loading } from "./loading";
import { useContext } from "react";

export const FeaturedRooms = () => {
  //static contextType = RoomContext;

    //render() {
    //let { loading, featuredRooms: rooms } = this.context;

    //rooms = rooms.map(room => {
    //  return <Room key={room.id} room={room} />;
    //});
    
    //let { loading, FeaturedRooms: rooms } = useContext(RoomContext);
    //console.log(rooms)
    /* const arr = rooms.map(room => {
        return <Room key={room.id} room={room} />;
    }); */

    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {/* {loading ? <Loading /> : arr} */}
        </div>
      </section>
    );
}
