import { useState } from 'react'
import styles from './list.module.css'

const MultiList = ({ options, selectedOptions, onSelect, onRemove }) => {
  const [isShow, setIsShow] = useState(false);
  const [searchText, setSearchText] = useState('');
  

  const toggleList = () => {
    setIsShow((prev) => !prev);
   
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className={styles.container} onClick={toggleList}>
      <div className={styles.options}>
        {selectedOptions.map((option) => (
          <div key={option} className={styles.selectedOption} onClick={(e)=>e.stopPropagation()}>
            <p>{option}</p>
            <button className={styles.btnClose} onClick={() => onRemove(option)}>&times;</button>
          </div>
        ))}
        <input
            type="text"
            placeholder="Enter your skills.."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className={styles.searchBar}
          />
      </div>
        
      {isShow ? (
          <ul className={`${styles.listItems} ${isShow && styles.show}`}>
            {filteredOptions.map((option) => (
              <li
                key={option}
                onClick={() => onSelect(option)}
                className={selectedOptions.includes(option) ? styles.selected : ''}
              >
                {option}
              </li>
            ))}
          </ul>
      ) : null}
      
       {isShow ? (
        <button className={styles.btnArrowUp} onClick={()=>toggleList}></button>
      ) : (
        <button className={styles.btnArrowDown} onClick={()=>toggleList}></button>
      )}
    </div>
  )
}

export default MultiList