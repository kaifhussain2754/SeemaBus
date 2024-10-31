import React from 'react';
import Slider from 'react-slick';
import styles from './HeroSection.module.css'; // Import your CSS module

// Import your images
import heroImage1 from '/hero3.jpg'; // Update the paths accordingly
import heroImage2 from '/hero2.jpg';
import heroImage3 from '/hero1.jpg';
import heroImage4 from '/hero4.jpg';
import heroImage5 from '/hero5.jpg';

const HeroSection = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className={styles.heroContainer}>
      <Slider {...settings}>
        <div className={styles.slide}>
          <img src={heroImage1} alt="Slide 1" className={styles.sliderImage} />
          <div className={styles.overlay} />
        </div>
        <div className={styles.slide}>
          <img src={heroImage2} alt="Slide 2" className={styles.sliderImage} />
          <div className={styles.overlay} />
        </div>
        <div className={styles.slide}>
          <img src={heroImage3} alt="Slide 3" className={styles.sliderImage} />
          <div className={styles.overlay} />
        </div>
        <div className={styles.slide}>
          <img src={heroImage4} alt="Slide 4" className={styles.sliderImage} />
          <div className={styles.overlay} />
        </div>
        <div className={styles.slide}>
          <img src={heroImage5} alt="Slide 5" className={styles.sliderImage} />
          <div className={styles.overlay} />
        </div>
      </Slider>
      <div className={styles.content}>
  <div className={styles.caption}>
    <h1>#1 Bus Service in Jaipur, Rajasthan</h1>
    <p>Experience comfort and convenience with our top-rated bus services.</p>
  </div>
  <button className={styles.button}>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
    </svg>
    <div className={styles.text}>Enquire Now</div>
  </button>
</div>
    </div>
  );
};

export default HeroSection;
