import {
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Divider,
} from '@mui/material';
import { Inbox, Mail } from '@mui/icons-material';
import { useContext, useReducer } from 'react';
import { UIContext, uiReducer } from '@/context/ui';

export const Sidebar = () => {
  const { isSideMenuOpen, closeSideMenu } = useContext(UIContext);
  const menuItems: string[] = ['Inbox', 'Starred', 'Send email', 'Drafts'];

  return (
    <Drawer
      anchor={'left'}
      open={isSideMenuOpen}
      onClose={closeSideMenu}>
      <Box width={250}>
        <Box sx={{ padding: '5px 10px' }}>
          <Typography variant='h4'>Menu</Typography>
        </Box>
        <List>
          {menuItems.map((text, index) => (
            <ListItem
              key={text}
              disablePadding>
              <ListItemButton>
                <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {menuItems.map((text, index) => (
            <ListItem
              key={text}
              disablePadding>
              <ListItemButton>
                <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
