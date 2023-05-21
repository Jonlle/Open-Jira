import { EntriesState } from './';
import { Entry } from '@/interfaces';

type EntriesActionType =
  | { type: 'ENTRY_ADD_ENTRY'; payload: Entry }
  | { type: 'ENTRY_UPDATE_ENTRY'; payload: Entry }
  | { type: 'ENTRY_REFRESH_DATA'; payload: Entry[] };

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
  switch (action.type) {
    case 'ENTRY_ADD_ENTRY':
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };
    case 'ENTRY_UPDATE_ENTRY':
      return {
        ...state,
        entries: state.entries.map((entry) => {
          if (entry._id === action.payload._id) {
            entry.status = action.payload.status;
            entry.description = action.payload.description;
          }
          return entry;
        }),
      };
    case 'ENTRY_REFRESH_DATA':
      return {
        ...state,
        entries: [...action.payload],
      };
    default:
      return state;
  }
};
