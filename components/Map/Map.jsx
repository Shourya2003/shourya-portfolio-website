import React from 'react';
import { mapData } from './MapData';

const containerStyle = {
  width: '100%',
  height: '350px',
  borderRadius: '0.5em',
  boxShadow: '0 8px 26px 0 rgba(22, 24, 26, 0.11)',
  transition: 'ease-out 0.16s',
  marginTop: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#f0f0f0',
  color: '#555',
  fontSize: '14px',
};

const center = {
  lat: mapData.mainData.lat,  // 28.5355 for Noida
  lng: mapData.mainData.lng   // 77.3910 for Noida
};

const Map = () => {
  return (
    <div style={containerStyle}>
      <p>🗺️ Google Map Disabled (API Key not set)</p>
      <p>Lat: {center.lat}, Lng: {center.lng}</p>
    </div>
  );
};

export default Map;
