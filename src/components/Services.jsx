import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Services.module.css'; // Ensure this path is correct
import BookingModal from './BookingModal'; // Ensure this path is correct

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal

  const buses = [
    {
      image: '/service1.jpg',
      title: 'Bus Rental Service',
      description: 'Rent a bus in Jaipur, like mini bus, 27 seater, 31, 35 seater, 41 seater, 45 seater, and 50/ 52/ 56 seater non-ac bus.',
    },
    {
      image: '/service2.jpg',
      title: 'Suv Car Service',
      description: 'Hire our taxi in Jaipur for Airport pick/drop, attend meeting or wedding at best taxi fare, starting at Rs 11 per km.',
    },
    {
      image: '/service3.jpg',
      title: 'Tempo Traveller',
      description: 'Hire a 9, 12, 16 seater Tempo traveller in Jaipur (and Maharaja Tempo), at a starting fare of Rs 18 per km.',
    },
    {
      image: '/service4.jpg',
      title: 'Luxury Car Rental',
      description: 'Rent a luxury car in Jaipur like Audi, Jaguar, BMW, Mercedes, Fortuner & Lime at best fare.',
    },
    {
      image: '/service5.jpg',
      title: 'Sedan Car Service',
      description: 'Available for ₹ 2500-3000 per day.',
    },
    {
      image: '/service6.jpg',
      title: 'Maharaja Tempo',
      description: 'Available for ₹ 26 per k.m.',
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Explore our Premium Services</h1>
      <p className="text-center mb-5">
        Discover the unmatched luxury and dependability of our premium bus services, designed for safety and comfort to provide an exceptional travel experience for every passenger.
      </p>
      <div className="row">
        {buses.map((bus, index) => (
          <div className="col-md-3 mb-4" key={index} data-aos="fade-up">
            <div className={`card h-100 ${styles.card}`}>
              <img src={bus.image} className={`card-img-top ${styles.cardImgTop}`} alt={bus.title} />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{bus.title}</h5>
                  <p className="card-text">{bus.description}</p>
                </div>
                <button // Use button instead of anchor tag
                  onClick={() => {
                    console.log('Opening modal for:', bus.title); // Debugging log
                    setIsModalOpen(true); // Open modal on click
                  }} 
                  className={`btn mt-3 ${styles.btn}`}
                  style={{ backgroundColor: '#B17457', borderColor: '#B17457' }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <BookingModal showModal={isModalOpen} handleClose={() => setIsModalOpen(false)} /> {/* Include the modal */}
    </div>
  );
};

export default Services;
