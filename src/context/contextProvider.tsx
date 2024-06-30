import { FC, createContext, useState } from "react";
import { typeDefaultValue, contextProps, employees, erro } from "../types";

const defaultValue = {
  namesButton: [],
  setNamesButton: () => {},
  search: "",
  setSearch: () => {},
  data: [],
  setData: () => {},
  dataFilter: [],
  setDataFilter: () => {},
}


export const MyContext = createContext<typeDefaultValue>(defaultValue);

export const ContextProvider: FC<contextProps> = ({ children }) => {
  const [namesButton, setNamesButton] = useState<string[]>(defaultValue.namesButton);
  const [search, setSearch] = useState<string>(defaultValue.search);
  const [data, setData] = useState<employees[] | erro[] | any[]>(defaultValue.data);
  const [dataFilter, setDataFilter] = useState<employees[] | erro[] | any[]>(defaultValue.dataFilter);  
  
  return (
    <MyContext.Provider value={{
      namesButton,
      setNamesButton,
      search,
      setSearch,
      data,
      setData,
      dataFilter,
      setDataFilter
    }}>
      {children}
    </MyContext.Provider>
  );  
}
