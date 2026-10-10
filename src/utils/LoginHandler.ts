import localStorage from '../storage/LocalStorage';
import { STORE_KEY } from '../storage/StoreKey';

export type LoginRoute =
  | 'MainNavigator'
  | 'KitchenRegisterScreen'
  | 'ChooseLocationScreen'
  | null;

export const LoginHandler = (): LoginRoute => {
  try {
    const token = localStorage.getItem(STORE_KEY.TOKEN);
    const userType = localStorage.getItem(STORE_KEY.USERTYPE);
    const kitchenId = localStorage.getItem(STORE_KEY.KITCHEN_ID);
    const isAddressAdded = true;

    if (!token || !userType) {
      return null;
    }
    if (userType === 'seller') {
      if (kitchenId) {
        return 'MainNavigator';
      }

      return 'KitchenRegisterScreen';
    }

    // Buyer flow
    if (userType === 'buyer') {
      if (isAddressAdded) {
        return 'MainNavigator';
      }

      return 'ChooseLocationScreen';
    }

    return null;
  } catch (error) {
    console.error('Error in LoginHandler:', error);
    return null;
  }
};
