import { Asset } from 'react-native-image-picker';

export type ApiResponseType<T> = {
  message: string;
  result?: T;
  success: boolean;
};

export type LoginResposneProps = {
  user: {
    _id?: string;
    phone: string;
    role?: string;
  };
};
type KitchenPhoto = {
  public_id: string;
  url: string;
};

type FoodType = {
  label: string;
};
export type RegisterKitchenResponseProps = {
  _id?: string;
  SubscriptionPlan: string | null;
  aboutKitchen: string;
  createdAt: string;
  foodType: FoodType[];
  isSubscriptionActive: boolean | null;
  kitchenDashboardId: string;
  kitchenName: string;
  kitchenPhoto: KitchenPhoto | null;
  mealId: string | null;
  mealTime: string;
  pricePerMeal: string;
  rating: string[];
  userId: string;
  verified: boolean;
  weeklyMealId: string | null;
};

export type KitchenDashBoardProps = {
  kitchenDashboard: {
    activeSubscriber: number;
    isNewRequestArrived: string[];
    kitchenId: string;
    kitchenRating: number | null;
    lastUpdate: string;
    thisMonthRevenue: number;
    todayMenu: unknown | null;
    todayTiffin: number;
    totalTiffinDelivered: number;
    __v: number;
    _id: string;
  };
  todayMenu: MealListResponseProps;
};

export type MealImageProps = {
  public_id: string;
  url: string;
};

export type MealListResponseProps = {
  _id: string;
  mealDay: string;
  // mealImage: Asset | null;
  mealImage: MealImageProps;
  mealName: string;
  mealTime: string;
  mealType: string;
  price: string;
};

export type KitchenListResponseProps = {
  DeliveryType: string;
  address: string;
  foodType: FoodType[];
  kitchenId: string;
  kitchenName: string;
  landMark: string;
  mealTime: string;
  pricePerMeal: string;
  rating: string;
  todayMenu: MealListResponseProps;
  kitchenPhoto: MealImageProps;
  aboutKitchen: string;
  ownerName: string;
};

export type DeliveryType = {
  lable: string;
  title: string;
};

export type FoodPreference = {
  label: string;
};

export type MealType = {
  lable: string;
  time: string;
};

export type Plan = {
  day: string;
  plan: string;
  discount: string;
  price: string | number;
};

export type PlanDetailResponseProps = {
  deliveryCharge: string;
  deliveryType: DeliveryType[];
  foodPerference: FoodPreference[];
  kitchenId: string;
  kitchenName: string;
  mealType: MealType[];
  plans: Plan[];
};

export type SubscribeMealPlanResposneProps = {
  amount: number;
  kitchenName: string;
  meal: string;
  mode: string;
  plan: string;
  startOn: string;
};
