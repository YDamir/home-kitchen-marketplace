// types/chefs.ts

export interface Chef {
  id: number;
  name: string;
  city: string;
  experience: number;
  specialties: string[];
  rating: number;
  availability?: boolean;
  imageUrl: string;
  avatarUrl?: string;        // если это поле необязательное
  specialty?: string;        // если это поле необязательное
  avgPrice?: number;         // если это поле необязательное
  avgDeliveryTime?: number;  // если это поле необязательное
  description?: string;      // если это поле необязательное
  cuisine?: string;          // добавляем свойство cuisine
}
