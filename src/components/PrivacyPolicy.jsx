import React from 'react';
import { Modal, Container, Typography, Paper, List, ListItem, ListItemText, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const PrivacyPolicyModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="privacy-policy-title"
      aria-describedby="privacy-policy-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxHeight: '90vh',
          overflowY: 'auto',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Container maxWidth="md" sx={{ padding: '20px', position: 'relative' }}>
          <Paper elevation={0} sx={{ padding: '20px', textAlign: 'justify' }}>
            {/* Close Button */}
            <IconButton
              onClick={handleClose}
              sx={{ position: 'absolute', top: 10, right: 10 }}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>

            <Typography variant="h4" align="center" gutterBottom>
              Privacy Policy for Seema Bus Service
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Effective Date:</strong> 03/11/2024
            </Typography>

            <Typography variant="body1" paragraph>
              At Seema Bus Service, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website [insert website URL] and when you book our services.
            </Typography>

            <Typography variant="h6" gutterBottom>
              1. Information We Collect
            </Typography>
            <Typography variant="body1" paragraph>
              We may collect personal information from you when you visit our website or book a service. The types of information we may collect include:
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Personal Identification Information: Name, email address, and phone number." />
              </ListItem>
            </List>

            <Typography variant="h6" gutterBottom>
              2. How We Use Your Information
            </Typography>
            <Typography variant="body1" paragraph>
              We use the information we collect from you in the following ways:
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="To process your bookings and manage your requests." />
              </ListItem>
              <ListItem>
                <ListItemText primary="To improve customer service and respond to your inquiries more effectively." />
              </ListItem>
              <ListItem>
                <ListItemText primary="To personalize your experience on our website." />
              </ListItem>
              <ListItem>
                <ListItemText primary="To send periodic emails related to your booking or our services." />
              </ListItem>
            </List>

            <Typography variant="h6" gutterBottom>
              3. How We Protect Your Information
            </Typography>
            <Typography variant="body1" paragraph>
              We implement a variety of security measures to maintain the safety of your personal information. Your personal data is stored in secure networks and is only accessible by authorized personnel who have special access rights to such systems and are required to keep the information confidential.
            </Typography>

            <Typography variant="h6" gutterBottom>
              4. Disclosure of Your Information
            </Typography>
            <Typography variant="body1" paragraph>
              We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide users with advance notice.
            </Typography>

            <Typography variant="h6" gutterBottom>
              5. Third-Party Services
            </Typography>
            <Typography variant="body1" paragraph>
              Occasionally, we may include or offer third-party products or services on our website. These third-party sites have separate and independent privacy policies.
            </Typography>

            <Typography variant="h6" gutterBottom>
              6. Your Rights
            </Typography>
            <Typography variant="body1" paragraph>
              You have the right to request access to the personal information we hold about you and to request the correction or deletion of your personal information under certain circumstances.
            </Typography>

            <Typography variant="h6" gutterBottom>
              7. Changes to This Privacy Policy
            </Typography>
            <Typography variant="body1" paragraph>
              We may update this Privacy Policy from time to time. We will notify you about significant changes in the way we treat personal information by sending a notice to the primary email address specified in your account or by placing a prominent notice on our site.
            </Typography>

            <Typography variant="h6" gutterBottom>
              8. Contact Us
            </Typography>
            <Typography variant="body1" paragraph>
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <strong>Seema Bus Service</strong>
              <br />
              26, Shyam Vihar, Oppo. Balati Factory, Agra Road, Jaipur
              <br />
              seemabusservices@gmail.com
              <br />
              +91 9166185545
            </Typography>
          </Paper>
        </Container>
      </Box>
    </Modal>
  );
};

export default PrivacyPolicyModal;
