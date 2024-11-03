import React, { useState, useEffect } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const TermsAndConditionsModal = ({ onClose }) => {
  const [open, setOpen] = useState(true); // Set open to true by default

  useEffect(() => {
    setOpen(true); // Open the modal immediately when component mounts
  }, []);

  const handleClose = () => {
    setOpen(false);
    if (onClose) onClose(); // Call onClose if provided to handle modal close in parent component
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="terms-conditions-title"
      aria-describedby="terms-conditions-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography id="terms-conditions-title" variant="h6" component="h2" sx={{ fontWeight: 'bold'}}>
          Terms & Conditions
        </Typography>
        <Typography id="terms-conditions-description" sx={{ mt: 2 }}>
          <ul>
            <li>Other state tax, toll tax, parking, GST, night charges will be charged extra.</li>
            <br />
            <li>On hill routes rent will be extra.</li>
            <br />
            <li>Minimum charges will be for 250 kms per calendar day (From 00:00 to 24:00 hrs).</li>
            <br />
            <li>Kms will be calculated from our office to office.</li>
            <br />
            <li>Night Charges are Extra ₹300 per night</li>
          </ul>
        </Typography>
        <Button onClick={handleClose} sx={{ mt: 2 }} variant="contained" color="secondary">
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default TermsAndConditionsModal;
