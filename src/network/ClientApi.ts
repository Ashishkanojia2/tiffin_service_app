import { axiosClient } from '../client/ApiCalling';
import localStorage from '../storage/LocalStorage';
import { STORE_KEY } from '../storage/StoreKey';
import { useKitchenDashboardStore } from '../store/KitchenDashboardStore';
import { useMealStore } from '../store/mealListStore';
import { AddMealRequestProps } from '../types/ApiRequestType';
import {
  ApiResponseType,
  KitchenDashBoardProps,
  MealListResponseProps,
  RegisterKitchenResponseProps,
} from '../types/ApiResponseType';
import { ENDPOINT } from './ApiEndpoint';
const token = localStorage.getItem(STORE_KEY.TOKEN);
console.log(token);
export const KitchenDetailsApi = async (
  param: string,
): Promise<ApiResponseType<RegisterKitchenResponseProps>> => {
  const response = await axiosClient.get(
    `${ENDPOINT.KITCHEN_CLIENT.KITCHEN_DETAILS}?kitchenId=${param ?? ''}`,
  );

  return response.data;
};


export const KitchenDashboardApi = async (
  param: string,
): Promise<ApiResponseType<KitchenDashBoardProps>> => {
  const { setKitchenDashboardData } = useKitchenDashboardStore.getState();
  const response = await axiosClient.get(
    `${ENDPOINT.KITCHEN_CLIENT.KITCHEN_DASHBOARD}?kitchenDashBoardId=${
      param ?? ''
    }`,
  );
  console.log('dashboarddetails show', response);
  if (response.status) {
    setKitchenDashboardData(response.data.result ?? null);
  }
  return response.data;
};

export const mealListApi = async (): Promise<
  ApiResponseType<MealListResponseProps>
> => {
  const param = localStorage.getItem(STORE_KEY.KITCHEN_ID);
  const { setMealList } = useMealStore.getState();
  const response = await axiosClient.get(
    `${ENDPOINT.KITCHEN_CLIENT.MEAL_LIST}?kitchenId=${param ?? ''}`,
  );
  if (response.status) {
    setMealList(response.data.result);
  }
  console.log('dashboarddetails show', response);

  return response.data;
};

export const addMealApi = async (
  request: AddMealRequestProps,
): Promise<ApiResponseType<MealListResponseProps>> => {
  const response = await axiosClient.post(
    ENDPOINT.KITCHEN_CLIENT.ADD_MEAL,
    request,
  );
  return response.data;
};
