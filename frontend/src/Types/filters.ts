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
  cuisine?: string;
  dietaryPreference?: string;
  priceRange?: {
    min?: number;
    max?: number;
  };
  deliveryTimeRange?: {
    min?: number;
    max?: number;
  };
  chefRatingRange?: {
    min?: number;
    max?: number;
  };
  searchQuery?: string;
};


// Тип для фильтров, применяемых к поварам
export type ChefFilters = {
  name?: string;
  cuisine?: string;
  experience?: string;
  rating?: number;
  availability?: boolean;
  searchQuery?: string;
};
