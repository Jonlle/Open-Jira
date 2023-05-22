import { FC, PropsWithChildren, useEffect, useReducer } from 'react';
import { useSnackbar } from 'notistack';
import { EntriesContext, entriesReducer } from '.';
import { Entry } from '@/interfaces';
import { entriesApi } from '@/apis';

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [],
};

export const EntriesPovider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);
  const { enqueueSnackbar } = useSnackbar();

  const addNewEntry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>('/entries', { description });
    dispatch({ type: 'ENTRY_ADD_ENTRY', payload: data });
  };

  const updateEntry = async (entry: Entry, showSnackbar: boolean = false) => {
    const { _id, description, status } = entry;

    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, { description, status });

      dispatch({ type: 'ENTRY_UPDATE_ENTRY', payload: data });

      if (showSnackbar) {
        enqueueSnackbar('Entrada actualizada con exito', {
          variant: 'success',
          autoHideDuration: 2000,
          anchorOrigin: { horizontal: 'right', vertical: 'top' },
        });
      }
    } catch (error) {}
  };

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>('/entries');
    dispatch({ type: 'ENTRY_REFRESH_DATA', payload: data });
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  return (
    <EntriesContext.Provider value={{ ...state, addNewEntry, updateEntry, refreshEntries }}>
      {children}
    </EntriesContext.Provider>
  );
};
