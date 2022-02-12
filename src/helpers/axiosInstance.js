import axios from 'axios';
import envs from '@config/env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate} from '@navigations/SideMenu/RootNavigator';
import {CREATE_CONTACT} from '../constants/routeNames';

let headers = {};

const axiosInstance = axios.create({
  baseURL: envs.DEV_BACKEND_URL,
  headers,
});

axiosInstance.interceptors.request.use(
  async config => {
    navigate(CREATE_CONTACT);
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
