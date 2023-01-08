import RoomsContext from '../contexts/RoomsContext';
import { useContext } from "react";
import { RoomsList } from "./RoomsList";

export const RoomsContainer = ({places}) => {
  //const { rooms } = useContext(RoomsContext)

  return (
    <>
      <RoomsList rooms={places} /> 
    </>
  );
}