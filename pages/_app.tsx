import type { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { EntriesPovider } from '@/context/entries';
import { UIPovider } from '@/context/ui';
import { darkTheme, lightTheme } from '../themes';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <ThemeProvider theme={lightTheme}>
    <EntriesPovider>
      <UIPovider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </UIPovider>
    </EntriesPovider>
  );
}
