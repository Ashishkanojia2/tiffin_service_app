import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const BASEURL = 'http://10.189.102.62:4000/api/v1';

const axiosClient = axios.create({
  baseURL: BASEURL,
  timeout: 5000,
});

export const request = async ({
  url,
  method,
  data,
  headers,
}: AxiosRequestConfig) => {
  try {
    return new Promise<AxiosResponse>((resolve, reject) => {
      method = (method ?? 'GET').toUpperCase();
      const payload = {
        url,
        method,
        data,
        headers,
      };
      console.log('REQUEST', payload);
      axiosClient(payload)
        .then(res => resolve(res))
        .catch(err => {
          console.log(`ERR [client]: ${err}`);
          reject(err);
        });
    });
  } catch (error) {
    console.log('Api calling error', error);
  }
};
