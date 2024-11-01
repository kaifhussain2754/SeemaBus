import React, { useEffect } from 'react';
import ModalImage from 'react-modal-image';
import styles from './ImageGallery.module.css';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const ImageGallery = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ once: true }); // Initialize AOS and ensure animations run only once
  }, []);

  // Define the image data inside the component
  const images = [
    {
      src: '/hero1.jpg',
      alt: 'Image 1 Description',
    },
    {
      src: '/hero2.jpg',
      alt: 'Image 2 Description',
    },
    {
      src: '/hero3.jpg',
      alt: 'Image 3 Description',
    },
    {
      src: '/hero4.jpg',
      alt: 'Image 4 Description',
    },
    {
      src: '/service1.jpg',
      alt: 'Image 5 Description',
    },
    {
      src: '/service2.jpg',
      alt: 'Image 6 Description',
    },
    {
      src: '/service3.jpg',
      alt: 'Image 7 Description',
    },
    {
      src: '/service4.jpg',
      alt: 'Image 8 Description',
    },
    {
      src: '/service5.jpg',
      alt: 'Image 9 Description',
    },
    {
      src: '/service6.jpg',
      alt: 'Image 10 Description',
    },
    {
      src: '/logo.png',
      alt: 'Image 11 Description',
    },
    {
      src: '/aboutimage.jpeg',
      alt: 'Image 12 Description',
    },
    // Add more images as needed
  ];

  return (
    <div className={styles.galleryPage} data-aos="fade-in" data-aos-duration="1000">
      <h1 className={styles.galleryTitle}>Our Image Gallery</h1>
      <div className={styles.galleryContainer}>
        {images.map((image, index) => (
          <div className={styles.galleryItem} key={index} data-aos="fade-in" data-aos-duration="1000">
            <ModalImage
              small={image.src} // Thumbnail image (small)
              large={image.src} // Full-size image (large)
              alt={image.alt}
              className={styles.galleryImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
