import { useContext, useEffect } from "react";
import Butons from "./ButtonsUpAndDown";
import DataTable from "./dataTable";
import { MyContext } from "../context/contextProvider";
import style from "../componetsCss/table.module.css";

export default () => {
   const { data, search, setDataFilter, dataFilter } = useContext(MyContext);

   function filterData() {
    return data
     .filter(({name, phone, job}) => name.toUpperCase().includes(search)
      | phone.toUpperCase().includes(search)
      | job.toUpperCase().includes(search));  
 }

  useEffect(() => {
    if (data.length > 0) setDataFilter(filterData());
  }, [search]); 

  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th className={style.th}>foto</th>
          <th className={style.th}>Nome</th>
          <th className={`${style.mobileOff} ${style.th}`}>cargo</th>
          <th className={`${style.mobileOff} ${style.th}`}>data de admissão</th>
          <th className={`${style.mobileOff} ${style.th}`}>telefone</th>
          <th className={`${style.mobileOnly} ${style.th}`}><div className={style.ellipse} /></th>
        </tr>
      </thead>
      <tbody>
        {dataFilter.map(({name, image, admission_date, job, phone}, index) =>
        <>
          <tr key={index} className={style.bodyTr}>
            <td className={`${style.td}`}><img className={`${style.img}` } src={image} alt={name} /></td>
            <td className={`${style.td}`}>{name}</td>
            <td className={`${style.mobileOff} ${style.td}`}>{job}</td> 
            <td className={`${style.mobileOff} ${style.td}`}>{admission_date}</td>
            <td className={`${style.mobileOff} ${style.td}`}>{phone}</td>
            <td className={`${style.mobileOnly} ${style.td}`}>
              {<Butons indexTable={index}/>}
            </td>      
          </tr>
            <DataTable job={job} phone={phone} admission_date={admission_date} index={index} />
        </>
      )}
      </tbody>
    </table>
  );
}