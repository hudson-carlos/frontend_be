import { useContext, useEffect, useState } from "react";
import { employees, erro } from "../types";
import api from "../api";
import Butons from "./ButtonsUpAndDown";
import DataTable from "./dataTable";
import { MyContext } from "../context/contextProvider";

export default () => {
  const [data, setData] = useState<employees[] | erro[] | any[]>([]);

  useEffect(() => {
    api().then((res) => { setData(res) });
  }, []);
  
  return (
    <table>
      <thead>
        <tr>
          <th>foto</th>
          <th>Nome</th>
          <th className="mobile-off">cargo</th>
          <th className="mobile-off">data de admissão</th>
          <th className="mobile-off">telefone</th>
          <th className="mobile-only"><div className="ellipse" /></th>
        </tr>
      </thead>
      <tbody>
        {data.map(({name, image, admission_date, job, phone}, index) =>
        <>
          <tr key={index}>
            <td><img src={image} alt={name} /></td>
            <td>{name}</td>
            <td className="mobile-off">{job}</td> 
            <td className="mobile-off">{admission_date}</td>
            <td className="mobile-off">{phone}</td>
            <td className="mobile-only">
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