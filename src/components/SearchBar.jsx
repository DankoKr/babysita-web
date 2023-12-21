import { useState } from 'react';
import Button from './Button';
import styles from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <input
        type='text'
        placeholder='Search...'
        value={searchTerm}
        onChange={handleChange}
        className={styles.pattern}
      />
      <Button type={'submit'} text={'Search'} />
    </form>
  );
};

export default SearchBar;
