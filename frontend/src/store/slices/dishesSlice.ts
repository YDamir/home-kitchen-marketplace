import { createSlice } from '@reduxjs/toolkit';

interface Dish {
  id: string;
  name: string;
  price: number;
}

interface DishesState {
  dishes: Dish[];
}

const initialState: DishesState = {
  dishes: [],
};

const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers: {
    setDishes: (state, action) => {
      state.dishes = action.payload;
    },
  },
});

export const { setDishes } = dishesSlice.actions;

export default dishesSlice.reducer; // Обязательно добавьте default export