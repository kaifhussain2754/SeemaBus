import React, { useEffect, useState } from 'react';

const LogoLoader = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const animateScale = () => {
      const interval = setInterval(() => {
        setScale(prev => prev === 1 ? 1.2 : 1);
      }, 1000);

      return () => clearInterval(interval);
    };

    animateScale();
  }, []);

  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f9fafb',
    },
    loaderWrapper: {
      position: 'relative'
    },
    rippleEffect: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
      backgroundColor: 'rgba(59, 130, 246, 0.1)'
    },
    pulseEffect: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      backgroundColor: 'rgba(59, 130, 246, 0.05)'
    },
    logoContainer: {
      position: 'relative',
      width: '96px',
      height: '96px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderRadius: '50%',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transform: `scale(${scale})`,
      transition: 'transform 0.5s ease-in-out'
    },
    logo: {
      width: '64px',
      height: '64px',
      objectFit: 'contain'
    },
    loadingText: {
      position: 'absolute',
      bottom: '-32px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100%',
      textAlign: 'center',
      color: '#4b5563',
      fontWeight: 500,
      fontSize: '14px'
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loaderWrapper}>
        {/* Ripple effect circles */}
        <div style={styles.rippleEffect} />
        <div style={styles.pulseEffect} />
        
        {/* Logo container */}
        <div style={styles.logoContainer}>
          {/* Replace with actual logo - using placeholder for demo */}
          <img 
            src="/logo.png"
            alt="Logo"
            style={styles.logo}
          />
        </div>
        
        {/* Loading text */}
        <div style={styles.loadingText}>
          Loading...
        </div>
      </div>

      {/* Add keyframe animations */}
      <style>
        {`
          @keyframes ping {
            75%, 100% {
              transform: scale(2);
              opacity: 0;
            }
          }

          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: .5;
            }
          }
        `}
      </style>
    </div>
  );
};

export default LogoLoader;