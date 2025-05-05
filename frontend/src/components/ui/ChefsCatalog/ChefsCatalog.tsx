// pages/chefs/ChefsCatalog.tsx
import React, { useEffect, useMemo, useState } from 'react';
import styles from './ChefsCatalog.module.css';
import FilterPanel from '../../../components/ui/FilterPanel';
import SortSelect from '../../../components/ui/SortSelect/SortSelect';
import Pagination from '../../../components/ui/Pagination';
import ChefCard from '../../../components/ui/ChefCard';
import { Chef } from '../../../Types/chef';
import { SortOption } from '../../../Types/sort';
import { FilterOption } from '../../../Types/filters';
import chefsData from '../../../mock-data/chefs.json';

const chefs: Chef[] = chefsData;

const cuisineOptions: FilterOption[] = [
  { label: 'Все', value: '' },
  { label: 'Итальянская', value: 'italian' },
  { label: 'Французская', value: 'french' },
  { label: 'Японская', value: 'japanese' },
];

const experienceOptions: FilterOption[] = [
  { label: 'Все', value: '' },
  { label: '1-3 года', value: '1-3' },
  { label: '4-7 лет', value: '4-7' },
  { label: '8+ лет', value: '8+' },
];

const sortOptions: SortOption[] = [
  { label: 'По рейтингу (по убыванию)', value: 'rating-desc' },
  { label: 'По рейтингу (по возрастанию)', value: 'rating-asc' },
  { label: 'По опыту (по убыванию)', value: 'experience-desc' },
  { label: 'По опыту (по возрастанию)', value: 'experience-asc' },
];

const ITEMS_PER_PAGE = 6;

const ChefsCatalog: React.FC = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    cuisine: '',
    experience: '',
  });
  const [sortBy, setSortBy] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredChefs = useMemo(() => {
    return chefs.filter((chef) => {
      const cuisineMatch = selectedFilters.cuisine ? chef.cuisine === selectedFilters.cuisine : true;

      const experienceMatch = selectedFilters.experience
        ? selectedFilters.experience === '1-3'
          ? chef.experience >= 1 && chef.experience <= 3
          : selectedFilters.experience === '4-7'
          ? chef.experience >= 4 && chef.experience <= 7
          : chef.experience >= 8
        : true;

      return cuisineMatch && experienceMatch;
    });
  }, [selectedFilters]);

  const sortedChefs = useMemo(() => {
    return [...filteredChefs].sort((a, b) => {
      switch (sortBy) {
        case 'rating-desc':
          return b.rating - a.rating;
        case 'rating-asc':
          return a.rating - b.rating;
        case 'experience-desc':
          return b.experience - a.experience;
        case 'experience-asc':
          return a.experience - b.experience;
        default:
          return 0;
      }
    });
  }, [filteredChefs, sortBy]);

  const paginatedChefs = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return sortedChefs.slice(start, start + ITEMS_PER_PAGE);
  }, [sortedChefs, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedFilters, sortBy]);

  const handleFilterChange = (name: string, value: string) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className={styles.catalogSection}>
      <h2 className={styles.heading}>Наши повара</h2>
  
      <div className={styles.filtersRow}>
        <FilterPanel
          filters={[
            { label: 'Кухня', name: 'cuisine', type: 'select', options: cuisineOptions },
            { label: 'Опыт', name: 'experience', type: 'select', options: experienceOptions },
          ]}
          values={selectedFilters}
          onChange={handleFilterChange}
        />
  
        <div className={styles.sortWrapper}>
          <SortSelect
            options={sortOptions}
            value={sortBy}
            selected={sortBy}
            onChange={setSortBy}
          />
        </div>
      </div>
  
      <div className={styles.grid}>
        {paginatedChefs.map((chef) => (
          <ChefCard
            key={chef.id}
            chef={{
              ...chef,
              avatarUrl: chef.avatarUrl || '',
              cuisine: chef.cuisine || '',
              specialty: chef.specialty || '',
              avgPrice: chef.avgPrice ?? 0,
              avgDeliveryTime: chef.avgDeliveryTime ?? 0,
              description: chef.description || '',
            }}
          />
        ))}
      </div>
  
      <div className={styles.paginationWrapper}>
        <Pagination
          currentPage={currentPage}
          totalItems={sortedChefs.length}
          totalPages={Math.ceil(sortedChefs.length / ITEMS_PER_PAGE)}
          totalCount={sortedChefs.length}
          itemsPerPage={ITEMS_PER_PAGE}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ChefsCatalog;
