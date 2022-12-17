import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useMemo } from 'react';
import styles from '../styles/MapContainer.module.scss';

export const MapContainer = () => {

    const center = useMemo(() => ({ lat:44, lng: -88 }), [] )

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
    }) 

    if (!isLoaded) return <div>Loading...</div>

    return (
        <GoogleMap 
            zoom={10}
            center={center}
            mapContainerClassName={styles.mapContainer}
        >
            <Marker position={center}/>
        </GoogleMap>
    )
}