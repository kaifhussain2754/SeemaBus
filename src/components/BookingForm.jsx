import React, { useState } from 'react';
import styles from './BookingForm.module.css'; // Import the updated CSS module

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickup: '',
    drop: '',
    travelDate: '',
    requests: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Details:', formData);
    // Add form submission logic here
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Book Your Next Trip</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.flex}>
          <div className={styles.inputContainer}>
            <label className={styles.label}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                required
                placeholder=" "
              />
              <span>Full Name</span>
            </label>
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.label}>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={styles.input}
                required
                placeholder=" "
              />
              <span>Phone Number</span>
            </label>
          </div>
        </div>

        <div className={styles.flex}>
          <div className={styles.inputContainer}>
            <label className={styles.label}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                required
                placeholder=" "
              />
              <span>Email Address</span>
            </label>
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.label}>
              <input
                type="text"
                name="pickup"
                value={formData.pickup}
                onChange={handleChange}
                className={styles.input}
                required
                placeholder=" "
              />
              <span>Pickup Destination</span>
            </label>
          </div>
        </div>

        <div className={styles.flex}>
          <div className={styles.inputContainer}>
            <label className={styles.label}>
              <input
                type="text"
                name="drop"
                value={formData.drop}
                onChange={handleChange}
                className={styles.input}
                required
                placeholder=" "
              />
              <span>Drop Destination</span>
            </label>
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.label}>
              <input
                type="date"
                name="travelDate"
                value={formData.travelDate}
                onChange={handleChange}
                className={styles.input}
                required
                placeholder=" "
              />
              <span>Travel Date</span>
            </label>
          </div>
        </div>

        <div className={styles.inputContainer}>
          <label className={styles.label}>
            <textarea
              name="requests"
              value={formData.requests}
              onChange={handleChange}
              className={styles.input}
              required
              placeholder=" "
            />
            <span>Special Requests</span>
          </label>
        </div>

        <button type="submit" className={styles.submit}>Submit</button>
      </form>
    </div>
  );
};

export default BookingForm;
