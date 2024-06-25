import { FC, createContext, useState } from "react";
import { typeDefaultValue, indexAndButton, contextProps } from "../types";

const defaultValue = {
  indexAndButton: {
    index: 0 - 1,
    nameButton: ""
  }, 
  setIndexAndButton: () => {},
}


export const MyContext = createContext<typeDefaultValue>(defaultValue);

export const ContextProvider: FC<contextProps> = ({ children }) => {
  const [indexAndButton, setIndexAndButton] = useState<indexAndButton>(defaultValue.indexAndButton);
  
  
  return (
    <MyContext.Provider value={{
      indexAndButton,
      setIndexAndButton,
    }}>
      {children}
    </MyContext.Provider>
  );  
}
