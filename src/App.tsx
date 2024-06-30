import React, { useContext, useEffect } from 'react';
import Table from './components/table';
import Search from './components/search';
import Header from './components/header';
import { MyContext } from "./context/contextProvider";
import './App.css';
import api from './api';

function App() {
  const { setData, data } = useContext(MyContext);

  useEffect(() => {
    api().then((res) => { setData(res) });
  }, []);

  if (data.length === 0) return <h1>Erro na Requisição</h1>

  return (
    <div className="App">
      <Header />
      <Search />
      <Table />
    </div>
  );
}

export default App;
