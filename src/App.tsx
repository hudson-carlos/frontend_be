import React from 'react';
import Table from './components/table';
import Search from './components/search';
import Header from './components/header';
import './App.css';

function App() { 
  return (
    <div className="App">
      <Header />
      <Search />
      <Table />
    </div>
  );
}

export default App;
