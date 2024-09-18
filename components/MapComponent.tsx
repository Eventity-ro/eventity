import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px',
    borderRadius: '0.25rem'
};

const center = {
    lat: 37.7749, // Replace with the latitude of your location
    lng: -122.4194 // Replace with the longitude of your location
};

const MapComponent: React.FC = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyB1MucSQ_DfASR8hXcXo_wdhopD0kIma4k"
    })

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
        >
            <Marker position={center} />
        </GoogleMap>
    ) : <></>
};

export default MapComponent;
