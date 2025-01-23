import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';


const App: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',  
        height: '100vh',
        backgroundColor: 'black',
        color: 'white',
        fontFamily: 'Roboto, Arial, sans-serif',
      }}
    >
      <CssBaseline /> 

      <Box
        sx={{
          flexGrow: 1, 
        }}
      >
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default App;
