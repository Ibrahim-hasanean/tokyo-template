import { Box, TextField, TextFieldProps } from '@mui/material';
import React from 'react';

const TextFieldComponent = (props: TextFieldProps) => {
  return (
    <Box sx={{ mb: '20px' }}>
      <TextField {...props} InputLabelProps={{ shrink: true }} fullWidth />
    </Box>
  );
};

export default TextFieldComponent;
