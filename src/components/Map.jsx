import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const position = [45.5017, -73.5673]; // Montreal

const Map = () => {
    return (
        <MapContainer center={position} minZoom={3} zoom={1} maxBounds={[[85, -180], [-85, 180]]} maxBoundsViscosity={1.0} zoomControl={false} style={{ height: '100vh', width: '100vw' }}>
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                attribution='&copy; <a href="https://carto.com/">CARTO</a> contributors'
                // updateWhenIdle={false}
                // updateWhenZooming={false}
                // keepBuffer={4}
            />
            {/* <Marker position={position}>
                <Popup>
                    Montréal <br /> Hello from Canada!
                </Popup>
            </Marker> */}
        </MapContainer>
    );
};

export default Map;
