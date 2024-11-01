import React, { useState } from 'react';
import { Container, TextField, Button, Grid } from '@mui/material';
import SuccessModal from './SuccessModal'; // Import the SuccessModal

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickup: '',
    drop: '',
    travelDate: '',
    requests: '',
    passengers: '',
  });
  const [result, setResult] = useState(""); // State to manage submission result
  const [modalOpen, setModalOpen] = useState(false); // State to control modal visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending....");

    // Create FormData object
    const formSubmissionData = new FormData();
    formSubmissionData.append("access_key", "02d6bfa2-a2e8-4f71-b08f-780980ef55b4");
    formSubmissionData.append("name", formData.name);
    formSubmissionData.append("phone", formData.phone);
    formSubmissionData.append("email", formData.email);
    formSubmissionData.append("pickup", formData.pickup);
    formSubmissionData.append("drop", formData.drop);
    formSubmissionData.append("travelDate", formData.travelDate);
    formSubmissionData.append("requests", formData.requests);
    formSubmissionData.append("passengers", formData.passengers);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formSubmissionData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setModalOpen(true); // Open the modal on success
        setFormData({ // Reset form fields
          name: '',
          phone: '',
          email: '',
          pickup: '',
          drop: '',
          travelDate: '',
          requests: '',
          passengers: '',
        });
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Submission Error", error);
      setResult("There was an error submitting the form.");
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Close the modal
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        marginTop: { xs: '-300px', sm: '-150px' },
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2 style={{ color: '#B17457', fontWeight: '600' }}>Book Your Next Trip</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Full Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone Number"
              variant="outlined"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email Address"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Pickup Destination"
              variant="outlined"
              name="pickup"
              value={formData.pickup}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Drop Destination"
              variant="outlined"
              name="drop"
              value={formData.drop}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="text" // Change this to text to allow custom formatting
              label="Travel Date"
              placeholder="dd/mm/yy" // Use placeholder to show the required format
              variant="outlined"
              name="travelDate"
              value={formData.travelDate}
              onChange={handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="No. of Passengers"
              type="number"
              variant="outlined"
              name="passengers"
              value={formData.passengers}
              onChange={handleChange}
              required
              inputProps={{ min: 1 }}
              fullWidth
            />
          </Grid>
        </Grid>
        <TextField
          label="Special Requests"
          variant="outlined"
          name="requests"
          value={formData.requests}
          onChange={handleChange}
          multiline
          rows={4}
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: '#B17457',
            color: '#fff',
            '&:hover': { backgroundColor: '#4A4947' },
            width: '100%', // Full width for the button
          }}
        >
          Submit
        </Button>
      </form>
      <span>{result}</span>
      
      {/* Render SuccessModal conditionally */}
      {modalOpen && <SuccessModal onClose={handleCloseModal} />}
    </Container>
  );
};

export default BookingForm;
