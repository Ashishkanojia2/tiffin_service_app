import { axiosClient } from '../client/ApiCalling';
import localStorage from '../storage/LocalStorage';
import { STORE_KEY } from '../storage/StoreKey';
import { useKitchenDashboardStore } from '../store/KitchenDashboardStore';
import { useKitchenListStore } from '../store/KitchenListStore';
import { useMealStore } from '../store/mealListStore';
import {
  AddMealRequestProps,
  ChooseMealPlanRequestProps,
} from '../types/ApiRequestType';
import {
  ApiResponseType,
  KitchenDashBoardProps,
  KitchenListResponseProps,
  MealListResponseProps,
  PlanDetailResponseProps,
  RegisterKitchenResponseProps,
  SubscribeMealPlanResposneProps,
} from '../types/ApiResponseType';
import { ChoosePlanProps } from '../types/AppTypes';
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
export const editMealApi = async (request: AddMealRequestProps) => {
  // const response = await axiosClient.post(
  //   ENDPOINT.KITCHEN_CLIENT.ADD_MEAL,
  //   request,
  // );
  // return response.data;
  return null;
};

export const kitchenListApi = async (): Promise<
  ApiResponseType<KitchenListResponseProps>
> => {
  const { setKitchenListData } = useKitchenListStore.getState();
  const response = await axiosClient.get(ENDPOINT.KITCHEN_CLIENT.KITCHEN_LIST);
  if (response.status) {
    setKitchenListData(response?.data?.result ?? []);
  }
  return response.data;
};

export const planDetailsApi = async (): Promise<
  ApiResponseType<PlanDetailResponseProps>
> => {
  const param = localStorage.getItem(STORE_KEY.KITCHEN_ID);
  const response = await axiosClient.get(
    `${ENDPOINT.PLAN.PLAN_DETAILS}?kitchenId=${param ?? ''}`,
  );
  return response.data;
};

export const chooseMealPlanApi = async (
  request: ChooseMealPlanRequestProps,
): Promise<ApiResponseType<SubscribeMealPlanResposneProps>> => {
  const response = await axiosClient.post(ENDPOINT.PLAN.CHOOSE_PLAN, request);
  return response.data;
};
