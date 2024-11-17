import React from 'react';
import styles from '../styles/FilterSearch.module.scss';

interface FilterSearchProps {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const FilterSearch: React.FC<FilterSearchProps> = ({ setSearchTerm }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <section className={styles.filterSearch}>
      <input
        type="text"
        placeholder="Tìm kiếm dự án..."
        onChange={handleChange}
      />
    </section>
  );
};

export default FilterSearch;
