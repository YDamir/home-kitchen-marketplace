// types/sort.ts
export type SortOption = {
  label: string;
  value: string;
};

export type SortConfig = {
  options: SortOption[];
  default: string;
};
