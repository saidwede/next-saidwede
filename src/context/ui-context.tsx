"use client"
// context/MyContext.tsx
import { createContext, useState, useCallback, ReactNode, Dispatch, SetStateAction } from 'react';

// Define the type for the context state
interface UIContextState {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  pos: number;
  setPos: Dispatch<SetStateAction<number>>;
  sectionRotate: number[];
  setSectionRotate: Dispatch<SetStateAction<number[]>>;
  openPos: (position: number) => void;
}

// Create the context with a default value
const UIContext = createContext<UIContextState | undefined>(undefined);

interface UIProviderProps {
  children: ReactNode;
}

const UIProvider = ({ children }: UIProviderProps) => {
  const [state, setState] = useState<string>('default value');
  const [pos, setPos] = useState(0)
  const [sectionRotate, setSectionRotate] = useState([
    0,
    90,
    90,
    90,
    90,
    90,
    90,
    90
  ])
  const openPos = useCallback((position: number) => {
    setPos(position);
    setSectionRotate((prev) =>
      prev.map((_, index) => {
        if (position === index) {
          return 0;
        }
        return index > position ? 90 : -90;
      })
    );
  }, []);
  return (
    <UIContext.Provider value={{ state, setState, pos, setPos, openPos, sectionRotate, setSectionRotate }}>
      {children}
    </UIContext.Provider>
  );
};
console.log('By @saidwede');
console.log('http://github.com/saidwede');
export { UIContext, UIProvider };
