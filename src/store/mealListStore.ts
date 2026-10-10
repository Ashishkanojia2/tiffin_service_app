import { create } from 'zustand';
import { MealListResponseProps } from '../types/ApiResponseType';

type MealListStoreProps = {
  mealList: MealListResponseProps | [];

  setMealList: (data: MealListResponseProps) => void;
  clearMealList: () => void;
};

export const useMealStore = create<MealListStoreProps>(set => ({
  mealList: [],
  setMealList: data =>
    set({
      mealList: data,
    }),
  clearMealList: () =>
    set({
      mealList: [],
    }),
}));
