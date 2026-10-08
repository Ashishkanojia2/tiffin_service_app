import { ToastData } from 'react-native-toast-message';
import { showErrorToast } from './Toast';

const showToast = ({ text1, text2 }: ToastData) => {
  showErrorToast({
    text1: text1,
    text2: text2,
  });
};
export const PhoneValidation = (value: string) => {
  if (!value) return showToast({ text1: 'Phone number is required' });
  if (!/^\d+$/.test(value))
    return showToast({ text1: 'Phone number must contain only digits' });
  if (value.length < 10)
    return showToast({ text1: 'Phone number must be 10 digits' });
  return true;
};

export const otpValidation = (value: string) => {
  if (!value) return showToast({ text1: 'OTP is required' });
  if (value.length < 6) return showToast({ text1: 'OTP must be 6 digits' });
  return true;
};
