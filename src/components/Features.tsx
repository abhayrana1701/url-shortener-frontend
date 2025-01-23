import React from 'react';
import { Box, Typography } from '@mui/material';

const Features: React.FC = () => {
  return (
    <Box sx={{ padding: '40px', backgroundColor: '#141415' }}>
      <Typography variant="h4" align="center" sx={{ color: '#fff', marginBottom: '40px' }}>
        Our Features
      </Typography>

   
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          gap: '20px',
          flexWrap: 'wrap', 
        }}
      >
       
        <Box
          sx={{
            backgroundColor: '#2e2e2e',
            padding: '30px',
            width: '200px',
            height: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px',
            transition: 'border 0.3s ease, transform 0.3s ease',
            '&:hover': {
              border: '2px solid #9e0aff', 
              transform: 'scale(1.05)', 
            },
          }}
        >
          <Typography variant="h6" sx={{ color: '#fff', textAlign: 'center' }}>
            Marketing campaigns to track engagement.
          </Typography>
        </Box>

     
        <Box
          sx={{
            backgroundColor: '#2e2e2e',
            padding: '30px',
            width: '200px',
            height: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px',
            transition: 'border 0.3s ease, transform 0.3s ease',
            '&:hover': {
              border: '2px solid #9e0aff', 
              transform: 'scale(1.05)',
            },
          }}
        >
          <Typography variant="h6" sx={{ color: '#fff', textAlign: 'center' }}>
            Social media sharing of short links.
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: '#2e2e2e',
            padding: '30px',
            width: '200px',
            height: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px',
            transition: 'border 0.3s ease, transform 0.3s ease',
            '&:hover': {
              border: '2px solid #9e0aff', 
              transform: 'scale(1.05)', 
            },
          }}
        >
          <Typography variant="h6" sx={{ color: '#fff', textAlign: 'center' }}>
            Custom branded short URLs for promotions.
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: '#2e2e2e',
            padding: '30px',
            width: '200px',
            height: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px',
            transition: 'border 0.3s ease, transform 0.3s ease',
            '&:hover': {
              border: '2px solid #9e0aff', 
              transform: 'scale(1.05)', 
            },
          }}
        >
          <Typography variant="h6" sx={{ color: '#fff', textAlign: 'center' }}>
            Detailed URL analytics for insights.
          </Typography>
        </Box>

        <Box
          sx={{
            backgroundColor: '#2e2e2e',
            padding: '30px',
            width: '200px',
            height: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px',
            transition: 'border 0.3s ease, transform 0.3s ease',
            '&:hover': {
              border: '2px solid #9e0aff',
              transform: 'scale(1.05)',
            },
          }}
        >
          <Typography variant="h6" sx={{ color: '#fff', textAlign: 'center' }}>
            Real-time URL tracking and reporting.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Features;
