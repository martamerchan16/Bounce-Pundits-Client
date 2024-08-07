import { useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

function ClubMap({ location }) {

    const { latitude, longitude } = location

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: ""
    })

    const [map, setMap] = useState(null)

    const onLoad = (map) => console.log('Aquí haz lo que necesites tras la carga del mapa')
    const onUnmount = () => setMap(null)

    return isLoaded && (
        <GoogleMap
            mapContainerStyle={{ height: '500px' }}
            zoom={12}
            onLoad={onLoad}
            center={{ lat: latitude, lng: longitude }}
            onUnmount={onUnmount}

        >
            <Marker position={{ lat: latitude, lng: longitude }} />

        </GoogleMap>
    )
}

export default ClubMap