// MapComponent.jsx
import React from 'react';
import { MapContainer, TileLayer, useMap, CircleMarker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function SetBounds({ bounds }) {
  const map = useMap();
  map.setMaxBounds(bounds);
  return null;
}

const Mapcomponent = ({ data }) => {
  const bounds = [
    [-90, -180],
    [90, 180]
  ];

  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '100vh', width: '100%' }} scrollWheelZoom={true}>
      <SetBounds bounds={bounds} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        noWrap={true}
      />
      {data.map((location, index) => (
        <CircleMarker
          key={index}
          center={[location.lat, location.lng]}
          radius={location.size}
          fillColor={location.color}
          color={location.color}
          weight={1}
          fillOpacity={0.5}
        >
          <Popup>{location.name}</Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
};

export default Mapcomponent;

