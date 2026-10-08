import { create } from 'zustand';
import { RegisterKitchenResponseProps } from '../types/ApiResponseType';

type KitchenStore = {
  kitchenData: RegisterKitchenResponseProps | null;

  setKitchenData: (data: RegisterKitchenResponseProps) => void;
  clearKitchenData: () => void;
};

export const useKitchenStore = create<KitchenStore>(set => ({
  kitchenData: null,
  setKitchenData: data => (
    console.log('123456789', data),
    set({
      kitchenData: data,
    })
  ),

  clearKitchenData: () =>
    set({
      kitchenData: null,
    }),
}));
