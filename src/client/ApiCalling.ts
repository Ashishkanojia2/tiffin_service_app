import axios, { AxiosHeaders } from 'axios';
import localStorage from '../storage/LocalStorage';
import { showErrorToast } from '../utils/Toast';
import { navigate } from '../routes/NavigationService';
const BASEURL = 'http://10.157.231.62:4000/api/v1';

export const axiosClient = axios.create({
  baseURL: BASEURL,
  // timeout: 10000, //10sec , 5sec
  headers: {
    Accept: 'application/json',
  },
});

axiosClient.interceptors.request.use(
  function (config) {
    const token = localStorage?.getItem('token')?.trim();
    const headers = AxiosHeaders.from(config.headers);
    console.log('=============================');
    console.log('=============================');
    console.log('========== REQUEST ==========');
    console.log('=============================');
    console.log('=============================');
    console.log('data', config.data);
    console.log('=============================');

    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
      config.headers = headers;
    } else {
      headers.delete('Authorization');
      config.headers = headers;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

axiosClient.interceptors.response.use(
  response => {
    console.log('========RESPONSE==========');
    console.log('res ==>  ', response.data);
    console.log('===========================');
    return response;
  },
  async error => {
    if (error.response) {
      const statusCode = error.response.status;
      const errorMessage = error.response.data.message || 'An error occurred';
      if (statusCode === 401) {
        console.error('Unauthorized access - redirecting to login');
        localStorage.removeItem('token');
        showErrorToast({
          text1: 'Unauthorized',
          text2: 'Unauthorized access - redirecting to login',
        });
        navigate('LoginScreen');
      } else if (statusCode === 500) {
        console.error('Server error - try again later');
      } else {
        console.log(`Error ${statusCode}: ${errorMessage}`);
        showErrorToast({
          text1: 'Error',
          text2: errorMessage,
        });
      }
    } else if (error.request) {
      console.error('Network error - check your internet connection');
    } else {
      console.error('Request error:', error.message);
    }
    return Promise.reject(error);
  },
);
