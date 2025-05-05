export type FilterOption = {
  label: string;
  value: string;
};

export type FiltersState = {
  category: string;
  cuisine: string;
};

export type FilterConfig =
  | {
      type: 'select';
      label: string;
      name: string;
      options: FilterOption[];
    }
  | {
      type: 'text';
      label: string;
      name: string;
      placeholder?: string;
    }
  | {
      type: 'range';
      label: string;
      name: string;
      placeholderFrom?: string;
      placeholderTo?: string;
    };

// Тип для фильтров, применяемых к блюдам
export type DishFilters = {
  category?: string;
  cuisine?: string;  // добавлено свойство cuisine
  priceRange?: {
    min?: number;
    max?: number;
  };
  rating?: number;
  searchQuery?: string;
};
