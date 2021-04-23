import * as React from "react";
import { useGoogleMaps } from 'react-hook-google-maps'

const Map = (props) => {
    const {ref, map, google} = useGoogleMaps(props.mapOps.key, {
        center: {
            lat: props.lat,
            lng: props.lng
        },
        zoom: props.mapOps.zoom
    })

    if (map) {
        new google.maps.Marker({
            position: {
                lat: props.lat,
                lng: props.lng
            },
            map: map
        })
    }
    
    return (
        <div ref={ref} style={{width: '300px', height: '300px'}}/>
    )
}

export default Map