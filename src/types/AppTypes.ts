import {
  KitchenListResponseProps,
  SubscribeMealPlanResposneProps,
} from './ApiResponseType';

export type RootStackParamList = {
  MealDetailsScreen: {
    kitchenData: KitchenListResponseProps;
  };
  SubscriptionScreen: undefined;

  SubscriptionConfirmedScreen: {
    subscribeMeal: SubscribeMealPlanResposneProps & {
      kitchenName?: string;
      subscribe?: { kitchenname?: string };
    };
  };
  // other screens...
};
export type DeliveryType = {
  lable: string;
  title: string;
};
export type MealType = {
  lable: string;
  time: string;
};

export type ChoosePlanProps = {
  kitchenId: string;
  planType: Plan | null;
  mealType: MealType | null;
  foodPerference: string;
  deliveryMode: string;
  startingDate: string;
  note: '';
};

export type Plan = {
  day: string;
  plan: string;
  discount: string;
  price: string | number;
};
