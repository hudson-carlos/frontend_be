import { dataTable } from "../types"

export default ({job, admission_date, phone}: dataTable ) => {
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