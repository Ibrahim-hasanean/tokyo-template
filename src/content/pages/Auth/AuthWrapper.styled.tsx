import { styled, Box } from '@mui/material';

const AuthWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: `url(${process.env.PUBLIC_URL}/static/images/backgroud.svg)`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  minHeight: '100vh'
}));

export default AuthWrapper;
