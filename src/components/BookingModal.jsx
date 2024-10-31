import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import styles from './BookingModal.module.css'; // Assuming you have a CSS module for custom styles

const BookingModal = ({ showModal, handleClose }) => {
  return (
    <Modal show={showModal} onHide={handleClose} className={styles.modal}>
      <Modal.Header closeButton>
        <Modal.Title>Booking Form</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        <Form>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" placeholder="Enter your phone number" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPickup">
            <Form.Label>Pickup Location</Form.Label>
            <Form.Control type="text" placeholder="Enter pickup location" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDrop">
            <Form.Label>Drop Location</Form.Label>
            <Form.Control type="text" placeholder="Enter drop location" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassengers">
            <Form.Label>No. Of Passengers</Form.Label>
            <Form.Control type="number" placeholder="Enter number of passengers" required min="1" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formSpecialRequest">
            <Form.Label>Special Request</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Any special requests or details" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button 
          variant="primary" 
          type="submit" 
          onClick={handleClose} 
          style={{ backgroundColor: '#B17457', border: 'none' }}
        >
          Submit Booking
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookingModal;
