import { Alert, Linking, PermissionsAndroid, Platform } from 'react-native';
import {
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import type { Asset } from 'react-native-image-picker';

const requestCameraPermission = async (): Promise<boolean> => {
  if (Platform.OS !== 'android') {
    return true;
  }

  const result = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.CAMERA,
  );

  if (result === PermissionsAndroid.RESULTS.GRANTED) {
    return true;
  }

  if (result === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
    Alert.alert(
      'Camera Permission Required',
      'Please enable camera permission from settings.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Open Settings',
          onPress: () => {
            Linking.openSettings();
          },
        },
      ],
    );
  }
  return false;
};
const requestGalleryPermission = async (): Promise<boolean> => {
  if (Platform.OS !== 'android') {
    return true;
  }

  const result = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
  );

  if (result === PermissionsAndroid.RESULTS.GRANTED) {
    return true;
  }

  if (result === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
    Alert.alert(
      'Gallery Permission Required',
      'Please enable gallery permission from settings.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Open Settings',
          onPress: () => {
            Linking.openSettings();
          },
        },
      ],
    );
  }
  return false;
};

const MediaPicker = async (type: 'camera' | 'library'): Promise<Asset | null> => {
  if (type === 'camera') {
    const hasPermission = await requestCameraPermission();
    if (!hasPermission) {
      return null;
    }
    const response = await launchCamera({
      mediaType: 'photo',
      quality: 0.5,
      cameraType: 'back',
      saveToPhotos: true,
    });
    return response.assets?.[0] ?? null;
  }

  const hasPermission = await requestGalleryPermission();
  if (!hasPermission) {
      return null;
  }

  const response = await launchImageLibrary({
    mediaType: 'photo',
    quality: 0.5,
    selectionLimit: 1,
  });
  return response.assets?.[0] ?? null;
};

export default MediaPicker;
