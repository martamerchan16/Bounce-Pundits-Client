import { useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

function ClubMap({ location }) {

    const { latitude, longitude } = location

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: "AIzaSyA2zRyxyY65T-x5u7y263X7iW47KzFRyFo"
    })

    const [map, setMap] = useState(null)

    const onLoad = (map) => console.log('Aquí haz lo que necesites tras la carga del mapa')
    const onUnmount = () => setMap(null)

    return isLoaded && (
        <GoogleMap
            mapContainerStyle={{ height: '500px' }}
            zoom={12}
            onLoad={onLoad}
            center={{ lat: Number(latitude), lng: Number(longitude) }}
            onUnmount={onUnmount}

        >
            <Marker position={{ lat: Number(latitude), lng: Number(longitude) }} />

        </GoogleMap>
    )
}

export default ClubMap