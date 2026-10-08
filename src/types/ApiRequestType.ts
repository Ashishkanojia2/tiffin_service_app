import type { Asset } from 'react-native-image-picker';

export type LoginRequestProp = {
  phone: string;
  role: string;
};
export type KitchenRegistrationForm = {
  kitchenName: string;
  ownerName: string;
  location: string;
  price: string;
  mealType: ('veg' | 'non-veg')[];
  deliveryType: 'homeDelivery' | 'selfPickup';
  mealTime: string;
  aboutKitchen: string;
  kitchenPhoto: Asset | null;
  landMark: string;
  pinCode: string;
};

export type RegisterKitchenRequestProps = FormData;
export type AddMealRequestProps = FormData

export type AddMealFormDataProps = {
  mealImage: Asset | null;
  mealName: string;
  mealPrice: string;
  mealDay: string;
  mealType: string;
  mealTime: string;
};
