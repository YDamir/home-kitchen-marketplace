// components/ui/SortPanel/SortPanel.tsx
import styles from './SortPanel.module.css';
import { SortOption } from '../../../Types/sort';

type Props<T extends string> = {
  config: SortOption[];
  selected: T;
  onChange: (value: T) => void;
};

export function SortPanel<T extends string>({ config, selected, onChange }: Props<T>) {
  return (
    <div className={styles.sortPanel}>
      <select value={selected} onChange={(e) => onChange(e.target.value as T)}>
        {config.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SortPanel;
