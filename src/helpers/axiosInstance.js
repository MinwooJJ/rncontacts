import axios from 'axios';
import envs from '@config/env';
import AsyncStorage from '@react-native-async-storage/async-storage';

let headers = {};

const axiosInstance = axios.create({
  baseURL: envs.DEV_BACKEND_URL,
  headers,
});

axiosInstance.interceptors.request.use(
  async config => {
    // request 전에 token 값을 설정해주는 interceptor
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;