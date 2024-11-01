import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './TourPackages.module.css'; // Import your CSS module

const TourPackages = () => {
  const packages = [
    {
      image: '/rajasthantour.jpg',
      title: 'Rajasthan Tour Package',
      description: 'Embark on a journey with Pushpganga Tours & Travels. Explore the vibrant culture and royal heritage of Rajasthan.',
    },
    {
      image: '/goldentriagle.jpeg',
      title: 'Golden Triangle Tour Package',
      description: 'Experience the famous Golden Triangle route: Delhi, Agra, and Jaipur, filled with history and grandeur.',
    },
    {
      image: '/manali.jpg',
      title: 'Manali Tour Package',
      description: 'Enjoy the breathtaking landscapes and adventure activities in the beautiful hill station of Manali.',
    },
    {
      image: '/4 dham.png',
      title: '4 Dham Tour Package',
      description: 'Visit the sacred 4 Dhams of India and experience spirituality at its best.',
    },
    {
      image: '/tajmahal.jpg',
      title: 'Agra Tour Package',
      description: 'Witness the iconic Taj Mahal and explore the rich history of Agra.',
    },
    {
      image: '/kashmir.jpg',
      title: 'Kashmir Tour Package',
      description: 'Discover the mesmerizing beauty of Kashmir, often referred to as paradise on Earth.',
    },
    {
      image: '/ladakh.jpg',
      title: 'Ladakh Tour Package',
      description: 'Experience the rugged beauty and adventure in the stunning landscapes of Ladakh.',
    },
    {
      image: '/himachal.jpg',
      title: 'Himachal Tour Package',
      description: 'Explore the majestic mountains and serene valleys of Himachal Pradesh.',
    },
    {
      image: '/kerela.jpg',
      title: 'Kerala Tour Package',
      description: 'Unwind in the backwaters and lush landscapes of Kerala, the land of coconut trees and spices.',
    },
  ];

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="container my-5" data-aos='fade-in'>
      <h1 className="text-center mb-4">Explore Our Tour Packages</h1>
      <p className="text-center mb-5">
        Embark on a journey with Pushpganga Tours & Travels. Our carefully crafted tour packages, where adventure meets luxury and memories are made.
      </p>
      <div className="row">
        {packages.map((tourPackage, index) => (
          <div className="col-md-4 mb-4" key={index} data-aos="fade-up">
            <div className={`card h-100 ${styles.card}`}>
              <img src={tourPackage.image} className={`card-img-top ${styles.cardImgTop}`} alt={tourPackage.title} />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{tourPackage.title}</h5>
                  <p className="card-text">{tourPackage.description}</p>
                </div>
                <a
                  href="#"
                  className={`btn mt-3 ${styles.btn}`}
                  style={{ backgroundColor: '#B17457', borderColor: '#B17457' }}
                >
                  See More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourPackages;
