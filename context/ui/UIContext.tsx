import { createContext } from 'react';

interface ContextProps {
  isSideMenuOpen: boolean;
  isAddingEntry: boolean;
  isDragging: boolean;

  openSideMenu: () => void;
  closeSideMenu: () => void;
  setAddingEntry: (value: boolean) => void;
  startDragging: () => void;
  endDragging: () => void;
}

export const UIContext = createContext({} as ContextProps);
