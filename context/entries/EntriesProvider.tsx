import { FC, PropsWithChildren, useContext, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { EntriesContext, entriesReducer } from '.';
import { Entry } from '@/interfaces';

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    { _id: uuidv4(), description: 'Finalizada: Tarea 1', createAt: Date.now() - 100000, status: 'finished' },
    { _id: uuidv4(), description: 'En Progreso: Tarea 2', createAt: Date.now() - 1000000, status: 'in-progress' },
    { _id: uuidv4(), description: 'Pendiente: Tarea 3', createAt: Date.now(), status: 'pending' },
  ],
};

export const EntriesPovider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  const addNewEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidv4(),
      description,
      createAt: Date.now(),
      status: 'pending',
    };

    dispatch({ type: 'ENTRY_ADD_ENTRY', payload: newEntry });
  };

  const updateEntry = (entry: Entry) => {
    dispatch({ type: 'ENTRY_UPDATE_ENTRY', payload: entry });
  };

  return <EntriesContext.Provider value={{ ...state, addNewEntry, updateEntry }}>{children}</EntriesContext.Provider>;
};
