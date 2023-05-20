import { createContext } from 'react';

interface ContextProps {
  isSideMenuOpen: boolean;
  toggleSideMenu: () => void;
  openSideMenu: () => void;
  closeSideMenu: () => void;
}

export const UIContext = createContext({} as ContextProps);
