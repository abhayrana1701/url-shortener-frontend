
import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/system';


const GradientButton = styled(Button)(() => ({
  background: 'linear-gradient(90deg, #9e0aff, #3f50ff)',
  color: 'white',
  borderRadius: 5, 
  fontSize: '16px',

  '&:hover': {
    transform: 'scale(1.1)',
  },
}));

interface GradientButtonProps {
  onClick: (e: React.FormEvent) => void; 
  text:String
}

const GradientButtonComponent: React.FC<GradientButtonProps> = ({ onClick, text }) => {
  return (
    <GradientButton
      variant="contained"
      fullWidth
      onClick={(e) => onClick(e)}
    
    >
      {text}
    </GradientButton>
  );
};

export default GradientButtonComponent;
