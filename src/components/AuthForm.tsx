import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginStart, loginSuccess, loginFailure } from '../store/authSlice';
import { loginUser, signupUser } from '../utils/api'; 
import FormInput from './FormInput';
import GradientButtonComponent from './GradientButton';
import { Typography, Container, Box, CircularProgress } from '@mui/material'; 
import { useNavigate } from 'react-router-dom';

interface AuthFormProps {
  isLogin: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ isLogin }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true); 
    dispatch(loginStart()); 

    try {
      const response = await (isLogin ? loginUser(email, password) : signupUser(email, password));

      if (response.success) {
        dispatch(loginSuccess({ email }));
        navigate('/dashboard');
      } else {
        throw new Error(response.message || 'Invalid credentials');
      }
    } catch (error) {
      dispatch(loginFailure('Authentication failed'));
      setError('Failed to authenticate');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',         
        justifyContent: 'center',
        alignItems: 'center',     
        height: '100vh',         
        backgroundColor: '#141415',
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          padding: '20px',
          backgroundColor: '#141415',
          borderRadius: 2,
          border: '2px solid #9c27b0',
          width: '350px',
          '@media (max-width: 600px)': {
            width: '90%',
          },
        }}
      >
        <Typography variant="h3" align="center" gutterBottom sx={{ color: '#9c27b0' }}>
          Linkzy
        </Typography>
        <Typography variant="h6" align="center" sx={{ color: '#fff', marginBottom: '20px' }}>
          Unlock Shortened Links, {isLogin ? 'Login' : 'Sign Up'} to Streamline
        </Typography>

        {error && <Typography color="error" align="center">{error}</Typography>}

        <FormInput label="Email" value={email} onChange={(e) => setEmail(e.target.value)} height="40px" />
        
        <Box sx={{ marginBottom: '20px' }} /> 

        <FormInput label="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" height="40px" />

        <Box sx={{ marginBottom: '20px' }} /> 

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <CircularProgress sx={{ color: '#9c27b0' }} />
          </Box>
        ) : (
          <GradientButtonComponent onClick={handleSubmit} text={isLogin ? 'Login' : 'Sign Up'} />
        )}

        <Typography align="center" sx={{ marginTop: '10px', color: '#fff' }}>
          {isLogin ? (
            <>
              Don't have an account? <a href="/signup" style={{ color: '#9c27b0', textDecoration: 'none' }}>Sign Up</a>
            </>
          ) : (
            <>
              Already have an account? <a href="/login" style={{ color: '#9c27b0', textDecoration: 'none' }}>Login</a>
            </>
          )}
        </Typography>
      </Container>
    </Box>
  );
};

export default AuthForm;
