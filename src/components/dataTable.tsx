import { useContext, useState } from "react";
import { MyContext } from "../context/contextProvider";
import style from "../componetsCss/dataTable.module.css"

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
        <tr className={style.tr}>
          <td className={style.td} colSpan={3}>
            <div className={style.container}>
              <div className={style.data}>
                <span>Cargo</span> <span>{job}</span>  
              </div>
            </div>
          </td>
        </tr>
        <tr className={style.tr}>
        <td className={style.td} colSpan={3}>
          <div className={style.container}>
              <div className={style.data}>
                <span>Data de admissão</span> <span>{admission_date}</span>  
              </div>
          </div>
          </td>
        </tr>
        <tr className={style.tr}>
        <td className={style.td} colSpan={3}>
          <div className={`${style.container} ${style.trLast}`}>
              <div className={style.data}>
                <span>Telefone</span> <span>{phone}</span>  
              </div>
          </div>
          </td>
        </tr>
      </>
    );

  } 
  
  return null;
}