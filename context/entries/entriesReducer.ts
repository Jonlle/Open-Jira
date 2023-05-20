import { EntriesState } from './EntriesProvider';

type EntriesActionType = { type: 'SET_ENTRIES_STATE' };

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
  switch (action.type) {
    case 'SET_ENTRIES_STATE':
      return {
        ...state,
        entries: [],
      };
    default:
      return state;
  }
};
