import {rooms} from '../data/rooms'
import { createContext } from 'react'

const RoomsContext = createContext()

const RoomsProvider = ({children}) => {
    
    const data = { rooms }

    return (
        <RoomsContext.Provider value = {data}>
            {children}
        </RoomsContext.Provider>
    )
}

export { RoomsProvider }
export default RoomsContext