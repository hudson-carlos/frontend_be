import { useState } from 'react';
import '../App.css';
import search from '../icons/Default.png';

export default () => {
  const [outlined, setOutlined] = useState(false);

  return (
    <div className="search">
      <h1>Funcionários</h1> 
      <div className={`container ${outlined ? 'outlined' : ''}`}>
        <input 
          type="text" 
          placeholder="Pesquisar"
          onFocus={() => setOutlined(true)}
          onBlur={() => setOutlined(false)} 
        />
        <img src={search} alt="search" />
      </div>
    </div>
  )
}