import items from '../data/roomsData'
import { createContext } from 'react'

const RoomsContext = createContext()

const RoomsProvider = ({children}) => {

    const data = { rooms: items }

    return (
        <RoomsContext.Provider value = {data}>
            {children}
        </RoomsContext.Provider>
    )
}

export { RoomsProvider }
export default RoomsContext