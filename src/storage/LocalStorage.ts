import { createMMKV } from 'react-native-mmkv';

const storage = createMMKV();

const localStorage = {
  getItem: (key: string): string | undefined => {
    return storage.getString(key);
  },

  setItem: (key: string, value: string): void => {
    if (!key || value === undefined || value === null) {
      return;
    }
    storage.set(key, value);
  },

  removeItem: (key: string): void => {
    if (!key) return;
    storage.remove(key);
  },

  deleteAll: (): void => {
    storage.clearAll();
  },

  hasItem: (key: string): boolean => {
    return storage.contains(key);
  },
};

export default localStorage;