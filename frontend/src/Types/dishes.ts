// types/dishes.ts
export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  cuisine: string;
  image: string;
  chefId: string;
  popularity: number;
}
