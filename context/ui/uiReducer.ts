import { UIState } from './';

type UIActionType =
  | { type: 'UI_OPEN_SIDE_MENU' }
  | { type: 'UI_CLOSE_SIDE_MENU' }
  | { type: 'UI_SET_ADDING_ENTRY'; payload: boolean };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case 'UI_OPEN_SIDE_MENU':
      return {
        ...state,
        isSideMenuOpen: true,
      };
    case 'UI_CLOSE_SIDE_MENU':
      return {
        ...state,
        isSideMenuOpen: false,
      };
    case 'UI_SET_ADDING_ENTRY':
      return {
        ...state,
        isAddingEntry: action.payload,
      };
    default:
      return state;
  }
};
