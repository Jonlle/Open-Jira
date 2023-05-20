import { createContext } from 'react';

interface ContextProps {
  isSideMenuOpen: boolean;
  isAddingEntry: boolean;

  openSideMenu: () => void;
  closeSideMenu: () => void;
  setAddingEntry: (value: boolean) => void;
}

export const UIContext = createContext({} as ContextProps);
