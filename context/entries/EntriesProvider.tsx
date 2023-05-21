import { FC, PropsWithChildren, useContext, useEffect, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
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

  const addNewEntry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>('/entries', { description });
    dispatch({ type: 'ENTRY_ADD_ENTRY', payload: data });
  };

  const updateEntry = async (entry: Entry) => {
    const { _id, description, status } = entry;

    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, { description, status });

      dispatch({ type: 'ENTRY_UPDATE_ENTRY', payload: data });
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
