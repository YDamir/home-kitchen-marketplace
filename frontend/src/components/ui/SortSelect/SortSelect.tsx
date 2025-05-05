import React from 'react';
import styles from './SortSelect.module.css'

type SortOption = {
  label: string;
  value: string;
};

// type SortSelectProps = {
//   options: SortOption[];
//   selected: string;
//   onChange: (value: string) => void;
// };

export interface SortSelectProps {
  options: SortOption[];
  selected: string;
  value: string;
  onChange: (value: string) => void;
}

const SortSelect: React.FC<SortSelectProps> = ({ options, selected, onChange }) => {
  return (
    <div className={styles["sort-select"]}>
      <label htmlFor="sort" className={styles["sort-label"]}>Сортировка:</label>
      <select
        id="sort"
        value={selected}
        onChange={(e) => onChange(e.target.value)}
        className={styles["sort-dropdown"]}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortSelect;