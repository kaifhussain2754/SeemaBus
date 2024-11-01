import React, { useState, useEffect } from 'react';
import styles from './ImageGallery.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: '/hero1.jpg', alt: 'Image 1 Description' },
    { src: '/hero2.jpg', alt: 'Image 2 Description' },
    { src: '/hero3.jpg', alt: 'Image 3 Description' },
    { src: '/hero4.jpg', alt: 'Image 4 Description' },
    { src: '/service1.jpg', alt: 'Image 5 Description' },
    { src: '/service2.jpg', alt: 'Image 6 Description' },
    { src: '/service3.jpg', alt: 'Image 7 Description' },
    { src: '/service4.jpg', alt: 'Image 8 Description' },
    { src: '/service5.jpg', alt: 'Image 9 Description' },
    { src: '/service6.jpg', alt: 'Image 10 Description' },
    { src: '/logo.png', alt: 'Image 11 Description' },
    { src: '/aboutimage.jpeg', alt: 'Image 12 Description' },
    { src: '/aboutimage.jpeg', alt: 'Image 13 Description' },
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
