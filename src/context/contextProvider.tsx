import { FC, createContext, useState } from "react";
import { typeDefaultValue, contextProps } from "../types";

const defaultValue = {
  namesButton: [],
  setNamesButton: () => {},
}


export const MyContext = createContext<typeDefaultValue>(defaultValue);

export const ContextProvider: FC<contextProps> = ({ children }) => {
  const [namesButton, setNamesButton] = useState<string[]>(defaultValue.namesButton);
  
  
  return (
    <MyContext.Provider value={{
      namesButton,
      setNamesButton,
    }}>
      {children}
    </MyContext.Provider>
  );  
}
