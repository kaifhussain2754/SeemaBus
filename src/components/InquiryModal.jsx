import React, { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Fade,
  Stack
} from '@mui/material';
import { X } from 'lucide-react';

const InquireModal = ({ open, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiry: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult('Sending...');

    const formSubmissionData = new FormData();
    formSubmissionData.append("access_key", "1510a139-e0ac-4347-98f3-01424627ef7e");
    formSubmissionData.append("name", formData.name);
    formSubmissionData.append("email", formData.email);
    formSubmissionData.append("phone", formData.phone);
    formSubmissionData.append("inquiry", formData.inquiry);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formSubmissionData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Inquiry submitted successfully!");
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          inquiry: ''
        });
        // Close modal after a brief delay to show success message
        setTimeout(() => {
          onClose();
          setResult('');
        }, 2000);
      } else {
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Failed to submit inquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      aria-labelledby="inquiry-modal-title"
    >
      <Fade in={open}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: 500 },
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}>
          {/* Close Button */}
          <IconButton
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'grey.500',
            }}
          >
            <X size={24} />
          </IconButton>

          {/* Modal Title */}
          <Typography
            id="inquiry-modal-title"
            variant="h5"
            component="h2"
            sx={{
              mb: 3,
              color: '#B17457',
              fontWeight: 600,
              textAlign: 'center'
            }}
          >
            Send Your Inquiry
          </Typography>

          {/* Inquiry Form */}
          <form onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                name="name"
                label="Full Name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
              />

              <TextField
                name="email"
                label="Email Address"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
              />

              <TextField
                name="phone"
                label="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
              />

              <TextField
                name="inquiry"
                label="Your Inquiry"
                value={formData.inquiry}
                onChange={handleChange}
                fullWidth
                required
                multiline
                rows={4}
                variant="outlined"
              />

              {/* Submission Status */}
              {result && (
                <Typography
                  color={result.includes('success') ? 'success.main' : 'error.main'}
                  textAlign="center"
                >
                  {result}
                </Typography>
              )}

              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                sx={{
                  backgroundColor: '#B17457',
                  color: '#fff',
                  '&:hover': { backgroundColor: '#4A4947' },
                  '&:disabled': { backgroundColor: '#cccccc' }
                }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </Button>
            </Stack>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
};

export default InquireModal;