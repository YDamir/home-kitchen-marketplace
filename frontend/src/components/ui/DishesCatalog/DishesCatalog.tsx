import React, { useEffect, useMemo, useState } from 'react';
import styles from './DishesCatalog.module.css';
import FilterPanel from '../../../components/ui/FilterPanel';
import SortSelect from '../../../components/ui/SortSelect/SortSelect';
import Pagination from '../../../components/ui/Pagination';
import DishCard from '../../../components/ui/DishCard';
import { Dish } from '../../../Types/dishes';
import { SortOption } from '../../../Types/sort';
import { FilterOption } from '../../../Types/filters';
import dishesData from '../../../mock-data/dishes.json';

const dishes: Dish[] = dishesData;

const categoryOptions: FilterOption[] = [
  { label: 'Все', value: '' },
  { label: 'Салаты', value: 'salad' },
  { label: 'Горячие блюда', value: 'main' },
  { label: 'Десерты', value: 'dessert' },
];

const cuisineOptions: FilterOption[] = [
  { label: 'Все', value: '' },
  { label: 'Итальянская', value: 'italian' },
  { label: 'Французская', value: 'french' },
  { label: 'Японская', value: 'japanese' },
];

const sortOptions: SortOption[] = [
  { label: 'По цене (по возрастанию)', value: 'price-asc' },
  { label: 'По цене (по убыванию)', value: 'price-desc' },
  { label: 'По популярности', value: 'popularity-desc' },
];

const ITEMS_PER_PAGE = 6;

const DishesCatalog: React.FC = () => {
  const [filters, setFilters] = useState({
    category: '',
    cuisine: '',
  });
  const [sortBy, setSortBy] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Обработчик изменения фильтров
  const handleFilterChange = (name: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Подготовка значений выбранных фильтров для FilterPanel
  const filterValues: Record<string, string> = {
    category: filters.category,
    cuisine: filters.cuisine,
  };

  // Фильтрация
  const filteredDishes = useMemo(() => {
    return dishes.filter((dish) => {
      const categoryMatch = filters.category ? dish.category === filters.category : true;
      const cuisineMatch = filters.cuisine ? dish.cuisine === filters.cuisine : true;
      return categoryMatch && cuisineMatch;
    });
  }, [filters]);

  // Сортировка
  const sortedDishes = useMemo(() => {
    return [...filteredDishes].sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'popularity-desc':
          return b.popularity - a.popularity;
        default:
          return 0;
      }
    });
  }, [filteredDishes, sortBy]);

  // Пагинация
  const paginatedDishes = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return sortedDishes.slice(start, start + ITEMS_PER_PAGE);
  }, [sortedDishes, currentPage]);

  // Сброс страницы при изменении фильтров или сортировки
  useEffect(() => {
    setCurrentPage(1);
  }, [filters, sortBy]);

  return (
    <div className={styles.catalogSection}>
      <h2 className={styles.heading}>Меню</h2>
  
      <FilterPanel
        filters={[
          {
            label: 'Категория',
            name: 'category',
            type: 'select',
            options: categoryOptions,
          },
          {
            label: 'Кухня',
            name: 'cuisine',
            type: 'select',
            options: cuisineOptions,
          },
        ]}
        values={filterValues}
        onChange={handleFilterChange}
      />
  
      <SortSelect
        options={sortOptions}
        value={sortBy}
        selected={sortBy}
        onChange={setSortBy}
      />
  
      <div className={styles.grid}>
        {paginatedDishes.map((dish) => (
          <DishCard key={dish.id} dish={{ ...dish, chef: '' }} />
        ))}
      </div>
  
      <Pagination
        currentPage={currentPage}
        totalItems={sortedDishes.length}
        totalCount={sortedDishes.length}
        totalPages={Math.ceil(sortedDishes.length / ITEMS_PER_PAGE)}
        itemsPerPage={ITEMS_PER_PAGE}
        onPageChange={setCurrentPage}
      />
    </div>
  );
  
  
};

export default DishesCatalog;
