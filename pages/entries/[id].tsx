import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  capitalize,
} from '@mui/material';
import { Layout } from '@/components/layouts';
import { Save, Delete } from '@mui/icons-material';
import { EntryStatus } from '@/interfaces';

const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished'];

export const EntryPage = () => {
  return (
    <Layout title='Editar entrada'>
      <Grid
        container
        justifyContent={'center'}
        sx={{ marginTop: 2 }}>
        <Grid
          item
          xs={12}
          sm={8}
          md={6}>
          <Card>
            <CardHeader
              title='Entrada:'
              subheader={`Creada hace: .... minutos`}
            />
            <CardContent>
              <TextField
                fullWidth
                label='Nueva entrada'
                sx={{ marginTop: 2, marginBottom: 1 }}
                placeholder='Nueva entrada'
                autoFocus
                multiline
              />
              <FormControl>
                <FormLabel>Estado:</FormLabel>
                <RadioGroup row>
                  {validStatus.map((status) => (
                    <FormControlLabel
                      key={status}
                      value={status}
                      control={<Radio />}
                      label={capitalize(status)}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </CardContent>
            <CardActions>
              <Button
                fullWidth
                variant='contained'
                startIcon={<Save />}
                // onClick={() => onSave()}
              >
                Guardar
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <IconButton
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          backgroundColor: 'error.main',
        }}>
        <Delete />
      </IconButton>
    </Layout>
  );
};

export default EntryPage;
