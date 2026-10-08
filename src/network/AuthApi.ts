import { axiosClient } from '../client/ApiCalling';
import localStorage from '../storage/LocalStorage';
import {
  LoginRequestProp,
  RegisterKitchenRequestProps,
} from '../types/ApiRequestType';
import {
  ApiResponseType,
  LoginResposneProps,
  RegisterKitchenResponseProps,
} from '../types/ApiResponseType';
import { ENDPOINT } from './ApiEndpoint';

export const LoginRequest = async (
  request: LoginRequestProp,
): Promise<ApiResponseType<LoginResposneProps>> => {
  const response = await axiosClient.post(ENDPOINT.AUTH.REGISTER, request);
  if (response.data) {
    localStorage.setItem('token', response?.data?.token);
    localStorage.setItem('userType', response.data?.result?.userType);
  }
  return response.data;
};

export const RegisterKitchenRequest = async (
  request: RegisterKitchenRequestProps,
): Promise<ApiResponseType<RegisterKitchenResponseProps>> => {
  try {
    const response = await axiosClient.post(
      ENDPOINT.KITCHEN_AUTH.REGISTER_KITCHEN,
      request,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const LogoutApi = async (): Promise<ApiResponseType<null>> => {
  try {
    const response = await axiosClient.post(ENDPOINT.AUTH.LOGOUT);
    return response.data;
  } catch (error) {
    throw error;
  }
};
