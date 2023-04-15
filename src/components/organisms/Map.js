import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { googleMapsApiKey } from '../../config';
import styles from '../styles/Map.module.scss';

const containerStyle = {
  width: '100%',
  height: '100%',
  margin: '2rem auto'
};

function Map({center, zoom}) {
  return (
    <div className={styles.map}>
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
    </div>
  )
}

export default React.memo(Map)