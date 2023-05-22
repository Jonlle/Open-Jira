import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f5f5f5',
      // default: grey[300],
    },
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#ff4081',
    },
    error: {
      main: '#f44336',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
      disabled: '#bdbdbd',
    },
  },

  components: {},
});
