import React from 'react';
import styles from './FilterPanel.module.css';
import { FilterConfig } from '../../../Types/filters';

type Props = {
  filters: FilterConfig[];
  values: Record<string, string>;
  onChange: (name: string, value: string) => void;
};

export const FilterPanel: React.FC<Props> = ({ filters = [], values, onChange }) => {
  return (
    <div className={styles.filtersSection}>
      <form className={styles.filtersForm}>
        {filters.map((filter) => {
          if (!filter || !filter.name) return null;
  
          const value = values[filter.name] || '';
  
          switch (filter.type) {
            case 'select':
              return (
                <label key={filter.name}>
                  {filter.label}
                  <select value={value} onChange={(e) => onChange(filter.name, e.target.value)}>
                    <option value="">Все</option>
                    {filter.options?.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </label>
              );
            case 'text':
              return (
                <label key={filter.name}>
                  {filter.label}
                  <input
                    type="text"
                    placeholder={filter.placeholder}
                    value={value}
                    onChange={(e) => onChange(filter.name, e.target.value)}
                  />
                </label>
              );
            case 'range':
              return (
                <label key={filter.name}>
                  {filter.label}
                  <div className={styles.range}>
                    <input
                      type="number"
                      placeholder={filter.placeholderFrom}
                      value={values[`${filter.name}From`] || ''}
                      onChange={(e) => onChange(`${filter.name}From`, e.target.value)}
                    />
                    <input
                      type="number"
                      placeholder={filter.placeholderTo}
                      value={values[`${filter.name}To`] || ''}
                      onChange={(e) => onChange(`${filter.name}To`, e.target.value)}
                    />
                  </div>
                </label>
              );
            default:
              return null;
          }
        })}
      </form>
    </div>
  );
};

export default FilterPanel;
