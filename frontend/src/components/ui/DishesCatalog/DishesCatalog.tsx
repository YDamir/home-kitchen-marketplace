import React, { useEffect, useMemo, useState } from 'react';
import styles from './DishesCatalog.module.css';
import FilterPanel from '../../../components/ui/FilterPanel';
import SortSelect from '../../../components/ui/SortSelect/SortSelect';
import Pagination from '../../../components/ui/Pagination';
import DishCard from '../../../components/ui/DishCard';
import { Dish } from '../../../Types/dishes';
import { SortOption } from '../../../Types/sort';
import { FilterOption, DishFilters } from '../../../Types/filters';

import dishesData from '../../../mock-data/dishes.json';

const dishes: Dish[] = dishesData;

const categoryOptions: FilterOption[] = [
  { label: 'Все', value: '' },
  { label: 'Супы', value: 'Супы' },
  { label: 'Основное', value: 'Основное' },
  { label: 'Десерты', value: 'Десерты' },
  { label: 'Завтраки', value: 'Завтраки' },
];

const cuisineOptions: FilterOption[] = [
  { label: 'Все', value: '' },
  { label: 'Украинская', value: 'Украинская' },
  { label: 'Русская', value: 'Русская' },
  { label: 'Американская', value: 'Американская' },
  { label: 'Узбекская', value: 'Узбекская' },
  { label: 'Средиземноморская', value: 'Средиземноморская' },
];

const ITEMS_PER_PAGE = 8;

const sortOptions: SortOption[] = [
  { label: 'По рейтингу (по убыванию)', value: 'rating-desc' },
  { label: 'По популярности (по убыванию)', value: 'popularity-desc' },
  { label: 'По времени доставки (по возрастанию)', value: 'deliveryTime-asc' },
  { label: 'По времени доставки (по убыванию)', value: 'deliveryTime-desc' },
  { label: 'По цене (по возрастанию)', value: 'price-asc' },
  { label: 'По цене (по убыванию)', value: 'price-desc' },
];

const dietaryOptions: FilterOption[] = [
  { label: 'Все', value: '' },
  { label: 'Вегетарианское', value: 'вегетарианское' },
  { label: 'Безглютеновое', value: 'безглютеновое' },
  { label: 'Постное', value: 'постное' },
];

const DishesCatalog: React.FC = () => {
  const [filters, setFilters] = useState<DishFilters>({
    category: '',
    cuisine: '',
    dietaryPreference: '',
    searchQuery: '',
    priceRange: { min: undefined, max: undefined },
    deliveryTimeRange: { min: undefined, max: undefined },
    chefRatingRange: { min: undefined, max: undefined },
  });
  const [sortBy, setSortBy] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleFilterChange = (name: string, value: string) => {
    setFilters((prev) => {
      if (name === 'priceRangeFrom') {
        return { ...prev, priceRange: { ...prev.priceRange, min: value ? Number(value) : undefined } };
      }
      if (name === 'priceRangeTo') {
        return { ...prev, priceRange: { ...prev.priceRange, max: value ? Number(value) : undefined } };
      }
      if (name === 'deliveryTimeFrom') {
        return { ...prev, deliveryTimeRange: { ...prev.deliveryTimeRange, min: value ? Number(value) : undefined } };
      }
      if (name === 'deliveryTimeTo') {
        return { ...prev, deliveryTimeRange: { ...prev.deliveryTimeRange, max: value ? Number(value) : undefined } };
      }
      if (name === 'chefRatingFrom') {
        return { ...prev, chefRatingRange: { ...prev.chefRatingRange, min: value ? Number(value) : undefined } };
      }
      if (name === 'chefRatingTo') {
        return { ...prev, chefRatingRange: { ...prev.chefRatingRange, max: value ? Number(value) : undefined } };
      }
      return { ...prev, [name]: value };
    });
  };

  const filterValues = {
    category: filters.category || '',
    cuisine: filters.cuisine || '',
    dietaryPreference: filters.dietaryPreference || '',
    priceRangeFrom: filters.priceRange?.min?.toString() || '',
    priceRangeTo: filters.priceRange?.max?.toString() || '',
    deliveryTimeFrom: filters.deliveryTimeRange?.min?.toString() || '',
    deliveryTimeTo: filters.deliveryTimeRange?.max?.toString() || '',
    chefRatingFrom: filters.chefRatingRange?.min?.toString() || '',
    chefRatingTo: filters.chefRatingRange?.max?.toString() || '',
    searchQuery: filters.searchQuery ?? '',
  };

  const filteredDishes = useMemo(() => {
    return dishes.filter((dish) => {
      const matchesSearch =
        (filters.searchQuery ?? '') === '' ||
        dish.name.toLowerCase().includes((filters.searchQuery ?? '').toLowerCase()) ||
        dish.ingredients?.some((ingredient) =>
          ingredient.toLowerCase().includes((filters.searchQuery ?? '').toLowerCase())
        );

      const matchesCategory = filters.category ? dish.category === filters.category : true;
      const matchesCuisine = filters.cuisine ? dish.cuisine === filters.cuisine : true;
      const matchesDietary = filters.dietaryPreference
        ? dish.dietaryPreferences?.includes(filters.dietaryPreference)
        : true;
      const matchesPriceMin = filters.priceRange?.min !== undefined ? dish.price >= filters.priceRange.min : true;
      const matchesPriceMax = filters.priceRange?.max !== undefined ? dish.price <= filters.priceRange.max : true;
      const matchesDeliveryMin = filters.deliveryTimeRange?.min !== undefined ? (dish.deliveryTime ?? 0) >= filters.deliveryTimeRange.min : true;
      const matchesDeliveryMax = filters.deliveryTimeRange?.max !== undefined ? (dish.deliveryTime ?? 0) <= filters.deliveryTimeRange.max : true;
      const matchesChefRatingMin = filters.chefRatingRange?.min !== undefined ? (dish.chefRating ?? 0) >= filters.chefRatingRange.min : true;
      const matchesChefRatingMax = filters.chefRatingRange?.max !== undefined ? (dish.chefRating ?? 0) <= filters.chefRatingRange.max : true;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesCuisine &&
        matchesDietary &&
        matchesPriceMin &&
        matchesPriceMax &&
        matchesDeliveryMin &&
        matchesDeliveryMax &&
        matchesChefRatingMin &&
        matchesChefRatingMax
      );
    });
  }, [filters]);

  const sortedDishes = useMemo(() => {
    return [...filteredDishes].sort((a, b) => {
      switch (sortBy) {
        case 'rating-desc':
          return (b.rating ?? 0) - (a.rating ?? 0);
        case 'popularity-desc':
          return b.popularity - a.popularity;
        case 'deliveryTime-asc':
          return (a.deliveryTime ?? 0) - (b.deliveryTime ?? 0);
        case 'deliveryTime-desc':
          return (b.deliveryTime ?? 0) - (a.deliveryTime ?? 0);
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        default:
          return 0;
      }
    });
  }, [filteredDishes, sortBy]);

  const paginatedDishes = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return sortedDishes.slice(start, start + ITEMS_PER_PAGE);
  }, [sortedDishes, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filters, sortBy]);

  return (
    <div className={styles.catalogSection}>
      <FilterPanel
        filters={[
          { label: 'Поиск', name: 'searchQuery', type: 'text', placeholder: 'По названию' },
          { label: 'Тип кухни', name: 'cuisine', type: 'select', options: cuisineOptions },
          { label: 'Категории блюд', name: 'category', type: 'select', options: categoryOptions },
          { label: 'Диетические предпочтения', name: 'dietaryPreference', type: 'select', options: dietaryOptions },
          {
            label: 'Диапазон цены',
            name: 'priceRange',
            type: 'range',
            placeholderFrom: 'От',
            placeholderTo: 'До',
          },
          {
            label: 'Время доставки',
            name: 'deliveryTime',
            type: 'range',
            placeholderFrom: 'От (мин)',
            placeholderTo: 'До (мин)',
          },
          {
            label: 'Рейтинг повара',
            name: 'chefRating',
            type: 'range',
            placeholderFrom: 'От',
            placeholderTo: 'До',
          },
        ]}
        values={filterValues}
        onChange={handleFilterChange}
      />

      <SortSelect options={sortOptions} value={sortBy} selected={sortBy} onChange={setSortBy} />

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
