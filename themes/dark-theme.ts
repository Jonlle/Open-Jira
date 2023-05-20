import { createTheme } from '@mui/material';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
    },
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#ff9800',
    },
    error: {
      main: '#f44336',
    },
  },
  components: {
    // MuiAppBar: {
    //   defaultProps: {
    //     elevation: 0,
    //   },
    //   styleOverrides: {
    //     root: {
    //       backgroundColor: '#4a148c',
    //     },
    //   },
    // },
  },
});
