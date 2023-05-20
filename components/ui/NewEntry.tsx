import { ChangeEvent, useContext, useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { Save, Add } from '@mui/icons-material';
import { EntriesContext } from '@/context/entries';
import { UIContext } from '@/context/ui';

export const NewEntry = () => {
  const [inputValue, setInputValue] = useState('');
  const [touched, setTouched] = useState(false);
  const { addNewEntry } = useContext(EntriesContext);
  const { isAddingEntry, setAddingEntry } = useContext(UIContext);

  const onTextFieldChanges = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSave = () => {
    if (inputValue.length === 0) return;
    addNewEntry(inputValue);
    resetForm();
  };

  const resetForm = () => {
    setInputValue('');
    setTouched(false);
    setAddingEntry(false);
  };

  return (
    <Box sx={{ marginBottom: 2, paddingX: 2 }}>
      {isAddingEntry ? (
        <>
          <TextField
            fullWidth
            sx={{ marginTop: 2, marginBottom: 1 }}
            placeholder='Nueva entrada'
            autoFocus
            multiline
            label='Nueva entrada'
            helperText={inputValue.length <= 0 && touched && 'Ingrese un valor'}
            value={inputValue}
            error={inputValue.length <= 0 && touched}
            onChange={onTextFieldChanges}
            onBlur={() => setTouched(true)}
          />
          <Box
            display={'flex'}
            justifyContent={'space-between'}>
            <Button
              variant='text'
              onClick={() => {
                resetForm();
              }}>
              Cancelar
            </Button>
            <Button
              variant='outlined'
              color='secondary'
              endIcon={<Save />}
              onClick={() => onSave()}>
              Guardar
            </Button>
          </Box>
        </>
      ) : (
        <Button
          variant='outlined'
          fullWidth
          startIcon={<Add />}
          onClick={() => setAddingEntry(true)}>
          Agregar tarea
        </Button>
      )}
    </Box>
  );
};
