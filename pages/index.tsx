import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import { Layout } from '@/components/layouts';
import { EntryList } from '@/components/ui';

export default function HomePage() {
  return (
    <Layout>
      <Grid
        container
        spacing={2}>
        <Grid
          item
          xs={12}
          sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Pendientes' />
            <EntryList />
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='En progreso' />
            <EntryList />
          </Card>
        </Grid>

        <Grid
          item
          xs={12}
          sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='Completadas' />
            <EntryList />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
}
