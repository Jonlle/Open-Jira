import { GetServerSideProps } from 'next';
import { useState, ChangeEvent, useContext, useMemo, FC } from 'react';
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
import { Save, Delete } from '@mui/icons-material';
import { dbEntries } from '@/database';
import { Entry, EntryStatus } from '@/interfaces';
import { EntriesContext } from '@/context/entries';
import { Layout } from '@/components/layouts';

const validStatus: EntryStatus[] = ['pending', 'in-progress', 'finished'];

interface Props {
  entry: Entry;
}

export const EntryPage: FC<Props> = ({ entry }) => {
  const { updateEntry } = useContext(EntriesContext);
  const [inputValue, setInputValue] = useState(entry.description);
  const [status, setStatus] = useState<EntryStatus>(entry.status);
  const [touched, setTouched] = useState(false);

  const isNotValid = useMemo(() => !inputValue.length && touched, [inputValue, touched]);
  // const { addNewEntry } = useContext(EntriesContext);
  // const { isAddingEntry, setAddingEntry } = useContext(UIContext);

  const onTextFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStatus(event.target.value as EntryStatus);
  };

  const onSave = () => {
    if (inputValue.trim().length === 0) return;

    const updatedEntry: Entry = {
      ...entry,
      description: inputValue,
      status,
    };

    updateEntry(updatedEntry, true);
  };

  return (
    <Layout title={inputValue.substring(0, 20) + '...'}>
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
              title={`Actualizar entrada`}
              subheader={`Creada hace: ${entry.createAt} minutos`}
            />
            <CardContent>
              <TextField
                fullWidth
                label='Descripcion'
                value={inputValue}
                sx={{ marginTop: 2, marginBottom: 1 }}
                placeholder='Descripcion'
                autoFocus
                multiline
                onBlur={() => setTouched(true)}
                onChange={onTextFieldChange}
                error={isNotValid}
                helperText={isNotValid && 'Ingrese un valor'}
              />
              <FormControl>
                <FormLabel>Estado:</FormLabel>
                <RadioGroup
                  row
                  value={status}
                  onChange={onRadioChange}>
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
                onClick={() => onSave()}
                disabled={!inputValue.length}>
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string };
  const entry = await dbEntries.getEntryById(id);

  if (!entry) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { entry },
  };
};

export default EntryPage;
