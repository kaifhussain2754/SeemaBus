import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const TopBanner = () => {
  return (
    <div
      style={{
        backgroundColor: '#4A4947',
        color: '#FAF7F0',
        padding: '10px 20px',
        textAlign: 'center',
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          flexWrap: 'wrap',
        }}
      >
        <span
          style={{
            flex: 1,
            textAlign: 'left',
            paddingRight: '20px',
            fontSize: '1rem',
          }}
        >
          📞 For Bookings: +91 91661 85546
        </span>
        <div
          style={{
            display: 'flex',
            gap: '15px',
            justifyContent: 'flex-end',
          }}
        >
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram
              style={{
                color: '#FAF7F0',
                fontSize: '1.5rem',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#B17457')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#FAF7F0')}
            />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook
              style={{
                color: '#FAF7F0',
                fontSize: '1.5rem',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#B17457')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#FAF7F0')}
            />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp
              style={{
                color: '#FAF7F0',
                fontSize: '1.5rem',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#B17457')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#FAF7F0')}
            />
          </a>
        </div>
      </div>

      {/* Inline Media Queries */}
      <style>
        {`
          @media (max-width: 768px) {
            span {
              font-size: 0.9rem;
              padding-right: 10px;
              text-align: center;
            }
            div > div {
              justify-content: center;
              gap: 10px;
            }
            a > svg {
              font-size: 1.2rem;
            }
          }

          @media (max-width: 576px) {
            span {
              font-size: 0.8rem;
              padding-right: 0;
            }
            div > div {
              justify-content: center;
              gap: 8px;
            }
            a > svg {
              font-size: 1rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default TopBanner;