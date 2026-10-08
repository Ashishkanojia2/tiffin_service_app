import { Method } from 'axios';
import { request } from '../client/Client';

type RequestType = {
  endpoint: string;
  body: any;
  headers?: any;
  method: Method;
};

const useRequest = () => {
  const apiRequest = async ({
    endpoint,
    body,
    method,
    headers: requestHeaders,
  }: RequestType): Promise<any> => {
    const headers = {
      'Content-Type': 'application/json',
      ...requestHeaders,
    };
    try {
      const result = await request({
        url: endpoint,
        method,
        data: body,
        headers,
      });
      if (result) return result?.data;
    } catch (error) {
      apiError(error);
      throw error;
    }
  };
  const apiError = (error: any) => {
    if (__DEV__) {
      console.log('API ERROR:', error);
    }
  };

  return { apiRequest, apiError };
};
export default useRequest;
