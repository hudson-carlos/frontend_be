import { useContext, useState } from 'react';
import '../App.css';
import searchButton from '../icons/Default.png';
import { MyContext } from '../context/contextProvider';
import styles from '../componetsCss/search.module.css';

export default () => {
  const [outlined, setOutlined] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');
  const { setSearch } = useContext(MyContext);


  return (
    <div className={styles.search}>
      <h1>Funcionários</h1> 
      <div 
        className={`${styles.container} ${outlined ? styles.outlined : ''}`}
      >
        <input 
          onChange={(e) => setValue(e.currentTarget.value)}
          type="text" 
          placeholder="Pesquisar"
          onFocus={() => setOutlined(true)}
          onBlur={() => setOutlined(false)} 
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault();
              setSearch(value.toUpperCase());
            } 
          }}
        />
        <img src={searchButton} alt="search" onClick={() => setSearch(value.toUpperCase())} />
      </div>
    </div>
  )
}