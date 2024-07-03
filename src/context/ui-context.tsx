"use client"
// context/MyContext.tsx
import { createContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

// Define the type for the context state
interface UIContextState {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  pos: number;
  setPos: Dispatch<SetStateAction<number>>;
  sectionRotate: number[];
    setSectionRotate: Dispatch<SetStateAction<number[]>>;
  openPos: Function
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
  ])
  function openPos(position: number){
    const rotations = [...sectionRotate]
    rotations.forEach((element, index) => {
      if(position == index){
        rotations[index] = 0
      }else if(index > position){
        rotations[index] = 90
      }
      else if(index < position){
        rotations[index] = -90
      }
    });
    setPos(position)
    setSectionRotate(rotations)
}
  return (
    <UIContext.Provider value={{ state, setState, pos, setPos, openPos, sectionRotate, setSectionRotate }}>
      {children}
    </UIContext.Provider>
  );
};
console.log('By @saidwede');
console.log('http://github.com/saidwede');
export { UIContext, UIProvider };
