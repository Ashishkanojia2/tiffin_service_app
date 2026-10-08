import Toast, { ToastData, ToastProps } from 'react-native-toast-message';
const ToastOptions: ToastProps = {
  autoHide: true,
  avoidKeyboard: true,
  position: 'bottom',
  swipeable: true,
  visibilityTime: 4000,
  keyboardOffset: 10,
  bottomOffset: 150,
  
};
export const showSuccessToast = (props: ToastData) => {
  Toast.show({
    type: 'success',
    ...props,
    ...ToastOptions,
  });
};
export const showErrorToast = (props: ToastData) => {
  Toast.show({
    type: 'error',
    ...props,
    ...ToastOptions,
  });
};
