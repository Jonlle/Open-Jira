import { List, ListItem, Paper } from '@mui/material';
import { EntryCard } from './EntryCard';

export const EntryList = () => {
  return (
    <div>
      <Paper sx={{ height: 'calc(100vh - 175px)', overflow: 'auto', backgroundColor: 'transparent' }}>
        <List sx={{ opacity: 1 }}>
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
        </List>
      </Paper>
    </div>
  );
};
