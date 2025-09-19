import React from 'react';

const containerStyle = {
  width: '100%',
  height: '350px',
  borderRadius: '0.5em',
  boxShadow: '0 8px 26px 0 rgba(22, 24, 26, 0.11)',
  transition: 'ease-out 0.16s',
  marginTop: '1.5rem',
  overflow: 'hidden',
};

const Map = () => {
  return (
    <div style={containerStyle}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236919.17728824716!2d77.23701468919643!3d28.5221023514615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e1!3m2!1sen!2sin!4v1758106904433!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
