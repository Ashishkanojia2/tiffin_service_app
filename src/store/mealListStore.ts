import { create } from 'zustand';
import { MealListResponseProps } from '../types/ApiResponseType';

type MealListStoreProps = {
  mealList: MealListResponseProps | [];

  setMealList: (data: MealListResponseProps) => void;
  clearMealList: () => void;
};

export const useMealStore = create<MealListStoreProps>(set => ({
  mealList: [],
  setMealList: data => (
    console.log('This data is Recived from zustand store', data),
    set({
      mealList: data,
    })
  ),
  clearMealList: () =>
    set({
      mealList: [],
    }),
}));
