//import { withRoomConsumer } from "../context";
import RoomsContext from '../contexts/RoomsContext';
import { useContext } from "react";
//import { Loading } from "./Loading";
import { RoomsFilter } from "./RoomsFilter";
import { RoomsList } from "./RoomsList";

export const RoomsContainer = () => {
  //const { loading, sortedRooms, rooms } = context;
  const { rooms } = useContext(RoomsContext)

  /* if (loading) {
    return <Loading />;
  } */
  return (
    <>
      <RoomsFilter rooms={rooms} /> 
      <RoomsList rooms={rooms} /> 
    </>
  );
}
//export default RoomContainer;
//export default withRoomConsumer(RoomContainer);

// import React from "react";
// import { RoomConsumer } from "../context";
// import Loading from "./Loading";
// import RoomsFilter from "./RoomsFilter";
// import RoomsList from "./RoomsList";
// export default function RoomContainer() {
//   return (
//     <RoomConsumer>
//       {value => {
//         const { loading, setRoom, sortedRooms,rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <>
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} setRoom={setRoom} />
//           </>
//         );
//       }}
//     </RoomConsumer>
//   );
// }