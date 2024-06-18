import React, { useEffect, useState } from 'react';
import api from './api';
import { erro, employees } from './types';
import './App.css';

function App() {
  const [data, setData] = useState<employees[] | erro[] | any[]>([]);

  useEffect(() => {
    api().then((res) => { setData(res) });
  }, []);
  
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>foto</th>
            <th>nome</th>
            <th>cargo</th>
            <th>data de admissão</th>
            <th>telefone</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({name, image, admission_date, job, phone}, index) => <tr key={index}>
            <td><img src={image} alt={name} /></td>
            <td>{name}</td>
            <td>{job}</td>
            <td>{admission_date}</td>
            <td>{phone}</td>
          </tr>)}
        </tbody>
      </table>
    </div>
  );
}

export default App;
