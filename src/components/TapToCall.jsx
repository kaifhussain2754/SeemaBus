// src/components/TapToCall.js
import React from 'react';
import { FaPhone } from 'react-icons/fa';

const TapToCall = () => {
  return (
    <a
      href="tel:9166185546" // Replace with your actual number
      style={{
        position: 'fixed',
        bottom: '90px', // Slightly above WhatsApp button if both are used
        right: '20px',
        backgroundColor: '#007bff',
        color: 'white',
        borderRadius: '50%',
        width: '60px',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.5rem',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        zIndex: 1000,
        textDecoration: 'none',
      }}
    >
      <FaPhone />
    </a>
  );
};

export default TapToCall;
