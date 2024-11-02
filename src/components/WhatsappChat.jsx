import React, { useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppChatButton = () => {
  
  useEffect(() => {
    // Set overflow-x hidden when component mounts
    document.body.style.overflowX = 'hidden';

    return () => {
      // Clean up when component unmounts
      document.body.style.overflowX = '';
    };
  }, []);

  return (
    <a
      href="https://api.whatsapp.com/send?phone=9166185546" // Replace with your number
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
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
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppChatButton;
