import { Dispatch, ReactNode, SetStateAction } from "react";

export interface employees {
  id: string;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}

export interface erro {
  erro: string
}

export interface dataTable {
  job: string,
  admission_date: string, 
  phone: string
}

export interface contextProps {
  children: ReactNode;
};

export interface typeDefaultValue {
  namesButton: string[]; 
  setNamesButton: Dispatch<SetStateAction<string[]>>;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  data: employees[] | erro[] | any[]; 
  setData: Dispatch<SetStateAction<employees[] | erro[] | any[]>>;
  dataFilter: employees[] | erro[] | any[]; 
  setDataFilter: Dispatch<SetStateAction<employees[] | erro[] | any[]>>;
}