import React, { FC, ReactNode, useEffect, useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleProp,
  ViewStyle,
  TouchableWithoutFeedback,
  Keyboard,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
interface KeyboardWrapperProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  keyboardVerticalOffset?: number;
}
const KeyboardWrapper: FC<KeyboardWrapperProps> = ({
  children,
  style,
  keyboardVerticalOffset,
}) => {
  const insets = useSafeAreaInsets();

    const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showListener = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true);
    });

    const hideListener = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false);
    });

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);
  if (Platform.OS === 'ios') {
    const offset = keyboardVerticalOffset ?? insets.bottom;
    return (
      //<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={[{ flex: 1 }, style]}
          behavior="padding"
          keyboardVerticalOffset={offset + 20}
        >
          {children}
        </KeyboardAvoidingView>
      //</TouchableWithoutFeedback>
    );
  }
  return (
   //<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          style={[{ flex: 1 }, style]}
          behavior="height"
          keyboardVerticalOffset={keyboardVisible?20:0}
        >
          {children}
        </KeyboardAvoidingView>
      //</TouchableWithoutFeedback>
  );
};
export default KeyboardWrapper;
