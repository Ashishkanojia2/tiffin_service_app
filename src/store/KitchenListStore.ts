import { create } from 'zustand';
import { KitchenListResponseProps } from '../types/ApiResponseType';

type KitchenListStore = {
  kitchenListData: KitchenListResponseProps | [];
  setKitchenListData: (data: KitchenListResponseProps) => void;
  clearKitchenListData: () => void;
};
export const useKitchenListStore = create<KitchenListStore>(set => ({
  kitchenListData: [],
  setKitchenListData: data => (
    set({
      kitchenListData: data,
    })
  ),
  clearKitchenListData: () =>
    set({
      kitchenListData: [],
    }),
}));
