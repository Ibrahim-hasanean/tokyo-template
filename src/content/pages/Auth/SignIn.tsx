import React from 'react';
import AuthWrapper from './AuthWrapper.styled';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
  Box
} from '@mui/material';
import ButtonComponent from 'src/components/Button';
import TextFieldComponent from 'src/components/TextField';
import Logo from 'src/components/LogoSign';
import FlexWrapper from 'src/components/FlexWrapper';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useAuth from 'src/hooks/useAuth';
import { IUser } from 'src/models/common';

const SignInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: { email: '', password: '' } });
  const { login, loading, error } = useAuth();
  const onSubmit = (data: IUser) => {
    login(data.email, data.password);
  };
  return (
    <AuthWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              register={register('email', {
                required: 'This field required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'invalid email address'
                },
                validate: {
                  minLength: (v) =>
                    v.length >= 5 || 'the email should be at least 5 character'
                }
              })}
              validationError={errors.email?.message}
            />
            <TextFieldComponent
              InputLabelProps={{ shrink: true }}
              fullWidth
              label="password"
              type="password"
              register={register('password', {
                required: 'This field required',
                validate: {
                  minLength: (v) =>
                    v.length >= 5 ||
                    'the password should be at least 5 character'
                }
              })}
              validationError={errors.password?.message}
            />
            <CardActions>
              <ButtonComponent
                type="submit"
                text="Sign In"
                fullWidth
                variant="contained"
                disabled={loading}
                isLoading={loading}
              />
            </CardActions>
            <Box sx={{ textAlign: 'center' }}>
              <Link to={'/auth/forget-password'}>forget password ?</Link>
            </Box>
          </CardContent>
        </Card>
      </form>
    </AuthWrapper>
  );
};

export default SignInPage;
