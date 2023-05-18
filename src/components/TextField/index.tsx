import {
  Box,
  TextField,
  TextFieldProps,
  Typography,
  styled
} from '@mui/material';
import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
interface ICssTextFiled {
  hasError: boolean;
}

const CssTextField = styled(TextField)<ICssTextFiled>(
  ({ theme, hasError }) => `
  ${
    hasError &&
    `& .MuiOutlinedInput-notchedOutline {
      border-color: ${theme.colors.error.dark};
   }`
  }
`
);

type TextFieldType = TextFieldProps & {
  register: UseFormRegisterReturn<string>;
  validationError?: string;
};

const TextFieldComponent = ({ validationError, ...rest }: TextFieldType) => {
  return (
    <Box sx={{ mb: '20px' }}>
      <CssTextField
        {...rest}
        {...rest.register}
        InputLabelProps={{ shrink: true }}
        fullWidth
        sx={validationError && {}}
        hasError={!!validationError}
      />
      <Typography sx={{ color: 'red' }}>{validationError}</Typography>
    </Box>
  );
};

export default TextFieldComponent;
