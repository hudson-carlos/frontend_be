import React from 'react';
import Table from './components/table';
import Search from './components/search';
import Header from './components/header';
import { ContextProvider } from "./context/contextProvider";
import './App.css';

function App() { 
  return (
    <ContextProvider>
      <div className="App">
        <Header />
        <Search />
        <Table />
      </div>
    </ContextProvider>
  );
}

export default App;
