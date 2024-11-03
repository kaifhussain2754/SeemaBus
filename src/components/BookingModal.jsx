import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import SuccessModal from './SuccessModal'; // Import the SuccessModal
import TermsAndConditionsModal from './TermsConditions'; // Import the TermsAndConditionsModal
import styles from './BookingModal.module.css'; // Assuming you have a CSS module for custom styles

const BookingModal = ({ showModal, handleClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickup: '',
    drop: '',
    passengers: '',
    requests: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false); // State to control Terms & Conditions modal

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData();

    for (const key in formData) {
      formDataObj.append(key, formData[key]);
    }

    formDataObj.append("access_key", "1510a139-e0ac-4347-98f3-01424627ef7e"); // Your access key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj,
      });
      const data = await response.json();

      if (data.success) {
        setSuccessMessage("Your response has been submitted successfully! Our representative will connect with you shortly.");
        setShowSuccessModal(true); // Show success modal
        handleClose(); // Close the booking modal
      } else {
        console.error("Error:", data);
        setSuccessMessage(data.message);
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <>
      <Modal show={showModal} onHide={handleClose} className={styles.modal}>
        <Modal.Header closeButton>
          <Modal.Title>Booking Form</Modal.Title>
        </Modal.Header>
        <Modal.Body className={styles.modalBody}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPickup">
              <Form.Label>Pickup Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter pickup location"
                name="pickup"
                value={formData.pickup}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formDrop">
              <Form.Label>Drop Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter drop location"
                name="drop"
                value={formData.drop}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassengers">
              <Form.Label>No. Of Passengers</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter number of passengers"
                name="passengers"
                value={formData.passengers}
                onChange={handleChange}
                required
                min="1"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formSpecialRequest">
              <Form.Label>Special Request</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Any special requests or details"
                name="requests"
                value={formData.requests}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Terms and Conditions Link */}
            <div className="d-flex justify-content-center">
              <Button variant="link" onClick={() => setShowTermsModal(true)}>
                View Terms & Conditions
              </Button>
            </div>

            <div className="d-flex justify-content-center">
              <Button
                variant="primary"
                type="submit"
                style={{ backgroundColor: '#B17457', border: 'none' }}
              >
                Submit Booking
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Success Modal */}
      {showSuccessModal && (
        <SuccessModal
          successMessage={successMessage}
          onClose={() => {
            setShowSuccessModal(false);
            setSuccessMessage('');
          }}
        />
      )}

      {/* Terms & Conditions Modal */}
      {showTermsModal && (
        <TermsAndConditionsModal onClose={() => setShowTermsModal(false)} />
      )}
    </>
  );
};

export default BookingModal;
