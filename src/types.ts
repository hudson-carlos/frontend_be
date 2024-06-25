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

export interface indexAndButton {
  index: number,
  nameButton: string,
} 

export interface typeDefaultValue {
  indexAndButton: indexAndButton; 
  setIndexAndButton: Dispatch<SetStateAction<indexAndButton>>;  
}