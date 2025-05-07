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
  dietaryPreferences?: string[];
  deliveryTime?: number;
  chefRating?: number;
  ingredients?: string[];
}
