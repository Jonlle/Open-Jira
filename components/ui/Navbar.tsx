import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import { UIContext } from '@/context/ui';

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
          {/* <MenuOutlinedIcon /> */}
          <MenuIcon />
        </IconButton>
        <Typography
          variant='h6'
          component='div'
          sx={{ flexGrow: 1 }}>
          Tasks
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
