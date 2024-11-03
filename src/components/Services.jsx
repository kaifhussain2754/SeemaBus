import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Services.module.css'; // Ensure this path is correct
import BookingModal from './BookingModal';
import PricingModal from './PricingModal';
import serviceData from './serviceData'; // Import service data

const Services = () => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isPricingModalOpen, setIsPricingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null); // State to hold the selected service

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleOpenPricingModal = (service) => {
    setSelectedService(service); // Set the selected service data
    setIsPricingModalOpen(true); // Open the Pricing Modal
  };

  return (
    <div className="container my-5" data-aos="fade-in">
      <h1 className="text-center mb-4">Explore our Premium Services</h1>
      <p className="text-center mb-5">
        Discover the unmatched luxury and dependability of our premium bus services, designed for safety and comfort to provide an exceptional travel experience for every passenger.
      </p>
      <div className="row">
        {serviceData.map((service, index) => (
          <div className="col-md-3 mb-4" key={index} data-aos="fade-up">
            <div className={`card h-100 ${styles.card}`}>
              <img src={service.image} className={`card-img-top ${styles.cardImgTop}`} alt={service.title} />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{service.title}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
                <div className="d-flex flex-column">
                  <button
                    onClick={() => setIsBookingModalOpen(true)}
                    className={`btn mt-3 ${styles.btn}`}
                    style={{ backgroundColor: '#B17457', borderColor: '#B17457' }}
                  >
                    Book Now
                  </button>

                  <button
                    onClick={() => handleOpenPricingModal(service)} // Pass the selected service
                    className={`btn mt-3 ${styles.btn}`}
                    style={{ backgroundColor: '#6C757D', borderColor: '#6C757D' }} // Grey button for pricing
                  >
                    Check Price
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modals */}
      <BookingModal showModal={isBookingModalOpen} handleClose={() => setIsBookingModalOpen(false)} />
      <PricingModal 
        showModal={isPricingModalOpen} 
        handleClose={() => setIsPricingModalOpen(false)} 
        service={selectedService} // Pass the selected service to the modal
      />
    </div>
  );
};

export default Services;
