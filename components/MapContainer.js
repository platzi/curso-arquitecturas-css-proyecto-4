import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { googleMapsApiKey } from '../config';
//import styles from '../styles/MapContainer.module.scss';

const containerStyle = {
  width: '100%',
  height: '80vh',
  margin: '2rem auto'
};

function MapContainer({center, zoom}) {
  return (
    <LoadScript
      googleMapsApiKey={googleMapsApiKey}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MapContainer)