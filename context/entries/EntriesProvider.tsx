import { FC, PropsWithChildren, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { EntriesContext, entriesReducer } from '.';
import { Entry } from '@/interfaces';

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    { _id: uuidv4(), description: 'Tarea 1', createAt: Date.now() - 100000, status: 'finished' },
    { _id: uuidv4(), description: 'Tarea 2', createAt: Date.now() - 1000000, status: 'in-progress' },
    { _id: uuidv4(), description: 'Tarea 3', createAt: Date.now(), status: 'pending' },
  ],
};

export const EntriesPovider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);

  return (
    <EntriesContext.Provider
      value={{
        ...state,
      }}>
      {children}
    </EntriesContext.Provider>
  );
};
