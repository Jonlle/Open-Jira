import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';

export const EntryCard = () => {
  return (
    <Card sx={{ marginBottom: 1 }}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>Esto es una descricion</Typography>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'end', padding: '1px 5px' }}>
          <Typography variant='body2'>hace 30 minutos</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};
