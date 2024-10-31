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

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" placeholder="Enter your phone number" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDate">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPackage">
            <Form.Label>Package</Form.Label>
            <Form.Control as="select" required>
              <option value="">Select a package</option>
              <option value="honeymoon">Honeymoon Package</option>
              <option value="adventure">Adventure Package</option>
              <option value="weekend">Weekend Getaway</option>
              <option value="family">Family Package</option>
              <option value="custom">Custom Package</option>
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Additional details or requests" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" type="submit" onClick={handleClose}>
          Submit Booking
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BookingModal;
