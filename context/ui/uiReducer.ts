import { UIState } from './';

type UIActionType = { type: 'UI_TOGGLE_SIDE_MENU' } | { type: 'UI_OPEN_SIDE_MENU' } | { type: 'UI_CLOSE_SIDE_MENU' };

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case 'UI_TOGGLE_SIDE_MENU':
      return {
        ...state,
        isSideMenuOpen: !state.isSideMenuOpen,
      };
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
    default:
      return state;
  }
};
