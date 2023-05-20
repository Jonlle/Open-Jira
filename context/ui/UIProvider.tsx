import { FC, PropsWithChildren, ReactNode, useReducer } from 'react';
import { UIContext, uiReducer } from '.';

export interface UIState {
  isSideMenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
  isSideMenuOpen: false,
};

export const UIPovider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const toggleSideMenu = () => {
    dispatch({ type: 'UI_TOGGLE_SIDE_MENU' });
  };

  const openSideMenu = () => {
    dispatch({ type: 'UI_OPEN_SIDE_MENU' });
  };

  const closeSideMenu = () => {
    dispatch({ type: 'UI_CLOSE_SIDE_MENU' });
  };

  return (
    <UIContext.Provider
      value={{
        ...state,
        toggleSideMenu,
        openSideMenu,
        closeSideMenu,
      }}>
      {children}
    </UIContext.Provider>
  );
};
