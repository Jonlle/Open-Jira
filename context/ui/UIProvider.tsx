import { FC, PropsWithChildren, useReducer } from 'react';
import { UIContext, uiReducer } from '.';

export interface UIState {
  isSideMenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
  isSideMenuOpen: false,
  isAddingEntry: false,
  isDragging: false,
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

  const startDragging = () => {
    dispatch({ type: 'UI_START_DRAGGING' });
  };

  const endDragging = () => {
    dispatch({ type: 'UI_END_DRAGGING' });
  };

  return (
    <UIContext.Provider value={{ ...state, openSideMenu, closeSideMenu, setAddingEntry, startDragging, endDragging }}>
      {children}
    </UIContext.Provider>
  );
};
