import AsyncStorage from '@react-native-async-storage/async-storage';

type asyncStorage = {
  key?: string;
  value?: string;
};

const Storage = {
  setItem: async ({ key = '', value = '' }: asyncStorage) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.error(error);
      throw new Error('Error setting item in AsyncStorage');
    }
  },
  getItem: async ({ key = '' }: asyncStorage) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  removeItem: async (key: string): Promise<void> => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error('AsyncStorage removeItem error:', error);
      throw error;
    }
  },
  clearStorage: async (): Promise<void> => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error('AsyncStorage clearStorage error:', error);
      throw error;
    }
  },
};

export default Storage;
