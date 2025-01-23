import React from 'react';
import { TextField } from '@mui/material';

interface FormInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  height: string; 
}

const FormInput: React.FC<FormInputProps> = ({ label, value, onChange, type = 'text', height }) => {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      type={type}
      fullWidth
  
      variant="outlined"
      sx={{
        '& .MuiOutlinedInput-root': {
          borderRadius: '5px',
          overflow: 'hidden',
          height: height,
          textAlign: 'center',
          '& fieldset': {
            borderColor: '#37383f', 
          },
          '&:hover fieldset': {
            borderColor: '#5a5b61',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#37383f', 
            borderWidth: '2px', 
          },
        },
      
        '& .MuiInputBase-input': {
          color: '#ffffff', 
          backgroundColor: '#2e3036', 
        },
       
        '& .MuiInputLabel-root': {
          color: '#a1a3a8', 
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: '#ffffff',
        },
      }}
    />
  );
};

export default FormInput;
