import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './mapa.css'

const position = [-23.1810989,-62.1769094];
function Mapa() {

  return (
    <div className="App">
    <h1>Mapa de Palmar Largo</h1>
    <div className="map-container">
      <MapContainer center={position} zoom={45} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>Palmar Largo</Popup>
        </Marker>
      </MapContainer>
    </div>
  </div>
  )
}

export default Mapa