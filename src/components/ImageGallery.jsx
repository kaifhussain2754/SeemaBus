import React, { useState, useEffect } from 'react';
import styles from './ImageGallery.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: '/img1.jpeg', alt: '' },
    { src: '/img2.jpeg', alt: '' },
    { src: '/img3.jpeg', alt: '' },
    { src: '/img4.jpeg', alt: '' },
    { src: '/img5.jpeg', alt: '' },
    { src: '/img6.jpeg', alt: '' },
    { src: '/img7.jpeg', alt: '' },
    { src: '/img8.jpeg', alt: '' },
    { src: '/img9.jpeg', alt: '' },
    { src: '/img10.jpeg', alt: '' },
    { src: '/img11.jpeg', alt: '' },
    { src: '/img12.jpeg', alt: '' },
    { src: '/img13.jpeg', alt: '' },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className={styles.galleryPage}>
      <h1 className={styles.galleryTitle}>Our Image Gallery</h1>
      <div className={styles.galleryContainer} data-aos='fade-in' data-aos-delay='200'>
        {images.map((image, index) => (
          <div className={styles.galleryItem} key={index} onClick={() => openModal(image.src)}>
            <img src={image.src} alt={image.alt} className={styles.galleryImage} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div 
          className={`${styles.modal} ${selectedImage ? styles.show : ''}`} 
          onClick={closeModal} 
          data-aos="zoom-in" // Apply AOS zoom-in effect
          data-aos-duration="300" // Duration for zoom-in effect
          data-aos-easing="ease-in-out" // Easing function
        >
          <span className={styles.close}>&times;</span>
          <img className={styles.modalContent} src={selectedImage} alt="Selected" />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
