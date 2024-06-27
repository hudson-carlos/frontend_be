import { useContext, useState } from "react";
import { MyContext } from "../context/contextProvider";

interface props {
  job: string;
  admission_date: string;
  phone: string;
  index: number;
}

export default ({job, admission_date, phone, index}: props ) => {
  const { namesButton } = useContext(MyContext);
  
  if(namesButton.includes(`down${index}`)) {
    return (
      <>
        <tr>
          <td>Cargo</td>
          <td colSpan={2}>{job}</td>
        </tr>
        <tr>
          <td>Data de admissão</td>
          <td colSpan={2}>{admission_date}</td>
        </tr>
        <tr>
          <td>Telefone</td>
          <td colSpan={2}>{phone}</td>
        </tr>
      </>
    );

  } 
  
  return null;
}