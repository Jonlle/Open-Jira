import { FC, DragEvent, useContext, useMemo } from 'react';
import { List, Paper } from '@mui/material';
import { EntryCard } from '.';
import { EntryStatus } from '../../interfaces/entry';
import { EntriesContext } from '@/context/entries';
import { UIContext } from '@/context/ui';

import styles from './EntryList.module.css';

interface Props {
  status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext);
  const { isDragging, endDragging } = useContext(UIContext);

  const entriesByStatus = useMemo(() => entries.filter((entry) => entry.status === status), [entries, status]);

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    const draggedEntryId = event.dataTransfer.getData('text/plain');
    const draggedEntry = entries.find((entry) => entry._id === draggedEntryId)!;

    draggedEntry.status = status;
    updateEntry(draggedEntry);
    endDragging();
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className={isDragging ? styles.dragging : ''}>
      <Paper
        sx={{ height: 'calc(100vh - 175px)', overflowY: 'auto', backgroundColor: 'transparent', padding: '3px 5px' }}>
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s' }}>
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
