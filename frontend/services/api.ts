
import axios from 'axios';
import { Watch, User, CartItem } from '../types';

const API_BASE_URL = 'http://localhost:3000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('betawatch_token');
  if (token && config.headers) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const api = {
  auth: {
    login: async (credentials: any) => {
      const response = await apiClient.post('/auth/login', credentials);
      return response.data;
    }
  },
  products: {
    getAll: async (): Promise<Watch[]> => {
      try {
        const response = await apiClient.get('/products');
        return response.data;
      } catch {
        const { INITIAL_WATCHES } = await import('../constants');
        return INITIAL_WATCHES;
      }
    }
  },
  orders: {
    create: async (items: CartItem[]) => {
      const response = await apiClient.post('/orders', { items });
      return response.data;
    }
  }
};
