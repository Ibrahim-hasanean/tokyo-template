import { useRoutes } from 'react-router-dom';
import router from 'src/router';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import { ToastContainer } from 'react-toastify';

function App() {
  const content = useRoutes(router);

  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        {content}
        <ToastContainer
          closeOnClick
          autoClose={2000}
          position="top-center"
          theme="colored"
          pauseOnHover
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
}
export default App;
