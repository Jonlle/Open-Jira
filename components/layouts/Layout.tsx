import Head from 'next/head';
import { FC, PropsWithChildren, ReactNode } from 'react';
import { Box } from '@mui/material';
import { Navbar, Sidebar } from '../ui';

interface Props extends PropsWithChildren {
  title?: string;
}

export const Layout: FC<Props> = ({ children, title = 'OpenJira' }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <Sidebar />
      <Box sx={{ padding: '10px 20px' }}>{children}</Box>
    </Box>
  );
};
