import { FC, useContext, useMemo } from 'react';
import { List, Paper } from '@mui/material';
import { EntryCard } from '.';
import { EntryStatus } from '../../interfaces/entry';
import { EntriesContext } from '@/context/entries';

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries } = useContext(EntriesContext);
  const entriesByStatus = useMemo(() => entries.filter((entry) => entry.status === status), [entries, status]);

  return (
    <div>
      <Paper sx={{ height: 'calc(100vh - 175px)', overflowY: 'auto', backgroundColor: 'transparent' }}>
        <List sx={{ opacity: 1, paddingX: 1 }}>
          {entriesByStatus.map((entry) => (
            <EntryCard
              key={entry._id}
              entry={entry}
            />
          ))}
        </List>
      </Paper>
    </div>
  );
};
