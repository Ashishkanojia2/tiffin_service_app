import { create } from 'zustand';
import {
  KitchenDashBoardProps,
  RegisterKitchenResponseProps,
} from '../types/ApiResponseType';

type KitchenDashboardStoreProps = {
  kitchenDashBoardData: KitchenDashBoardProps | null;

  setKitchenDashboardData: (data: KitchenDashBoardProps) => void;
  clearKitchenDashboardData: () => void;
};

export const useKitchenDashboardStore = create<KitchenDashboardStoreProps>(
  set => ({
    kitchenDashBoardData: null,
    setKitchenDashboardData: (data: KitchenDashBoardProps) =>
      set({
        kitchenDashBoardData: data,
      }),

    clearKitchenDashboardData: () =>
      set({
        kitchenDashBoardData: null,
      }),
  }),
);
