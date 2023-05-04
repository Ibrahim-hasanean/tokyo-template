import React from 'react';
import AuthWrapper from './AuthWrapper.styled';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  TextField,
  styled,
  Grid,
  Box
} from '@mui/material';
import ButtonComponent from 'src/components/Button';
import TextFieldComponent from 'src/components/TextField';
import Logo from 'src/components/LogoSign';
import FlexWrapper from 'src/components/FlexWrapper';
import { Link } from 'react-router-dom';

const SignInPage = () => {
  return (
    <AuthWrapper>
      <Card>
        <FlexWrapper sx={{ pt: '20px' }} justifyContent="center">
          <Logo link="#" />
        </FlexWrapper>
        <CardHeader
          title={<Typography variant="h2">Sign In</Typography>}
          sx={{ textAlign: 'center' }}
        />
        <CardContent sx={{ minWidth: '400px' }}>
          <TextFieldComponent
            InputLabelProps={{ shrink: true }}
            fullWidth
            label="email"
            type="email"
          />
          <TextFieldComponent
            InputLabelProps={{ shrink: true }}
            fullWidth
            label="password"
            type="password"
          />
          <CardActions>
            <ButtonComponent text="Sign In" fullWidth variant="contained" />
          </CardActions>
          <Box sx={{ textAlign: 'center' }}>
            <Link to={'/auth/forget-password'}>forget password ?</Link>
          </Box>
        </CardContent>
      </Card>
    </AuthWrapper>
  );
};

export default SignInPage;
