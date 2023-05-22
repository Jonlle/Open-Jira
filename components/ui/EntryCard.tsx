import { useRouter } from 'next/router';
import { DragEvent, FC, useContext } from 'react';
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { Entry } from '@/interfaces';
import { UIContext } from '@/context/ui';

interface Props {
  entry: Entry;
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const { startDragging, endDragging } = useContext(UIContext);
  const router = useRouter();
  const handleDragStart = (event: DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('text/plain', entry._id);
    startDragging();
  };

  const handleDragEnd = () => {
    endDragging();
  };

  const handleClick = () => {
    router.push(`/entry/${entry._id}`);
  };

  return (
    <Card
      sx={{ marginBottom: 1 }}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onClick={handleClick}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>{entry.description}</Typography>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'end', padding: '1px 5px' }}>
          <Typography variant='body2'>hace 30 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
