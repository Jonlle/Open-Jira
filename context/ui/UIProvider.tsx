import { FC, PropsWithChildren, useReducer } from 'react';
import { UIContext, uiReducer } from '.';

export interface UIState {
  isSideMenuOpen: boolean;
  isAddingEntry: boolean;
}

const UI_INITIAL_STATE: UIState = {
  isSideMenuOpen: false,
  isAddingEntry: false,
};

export const UIPovider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const openSideMenu = () => {
    dispatch({ type: 'UI_OPEN_SIDE_MENU' });
  };

  const closeSideMenu = () => {
    dispatch({ type: 'UI_CLOSE_SIDE_MENU' });
  };

  const setAddingEntry = (value: boolean) => {
    dispatch({ type: 'UI_SET_ADDING_ENTRY', payload: value });
  };

  return (
    <UIContext.Provider value={{ ...state, openSideMenu, closeSideMenu, setAddingEntry }}>
      {children}
    </UIContext.Provider>
  );
};
