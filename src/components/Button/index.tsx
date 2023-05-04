import React from 'react';
import { Button, ButtonProps, CircularProgress, useTheme } from '@mui/material';

interface IButtonComponentProps extends ButtonProps {
  text: string;
  isLoading?: boolean;
}

const ButtonComponent = ({
  text,
  isLoading = false,
  ...otherProps
}: IButtonComponentProps) => {
  const theme = useTheme();
  return (
    <Button {...otherProps} disabled={isLoading}>
      {isLoading ? (
        <CircularProgress
          sx={{ color: theme.palette.common.white }}
          size={24}
          disableShrink
          thickness={3}
        />
      ) : (
        text
      )}
    </Button>
  );
};

export default ButtonComponent;
