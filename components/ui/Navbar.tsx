import { useContext } from 'react';
import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { UIContext } from '@/context/ui';
import NextLink from 'next/link';

export const Navbar = () => {
  const { openSideMenu } = useContext(UIContext);

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
          onClick={openSideMenu}>
          <Menu />
        </IconButton>
        <Link
          href={'/'}
          component={NextLink}
          sx={{
            textDecoration: 'none',
            color: 'text.primary',
          }}>
          <Typography
            variant='h6'
            noWrap>
            OpenJira
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
