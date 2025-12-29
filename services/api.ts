
import axios from 'axios';
import { Watch, User, CartItem } from '../types';

const API_BASE_URL = 'http://localhost:3000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to attach JWT
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('betawatch_token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const api = {
  auth: {
    login: async (credentials: any) => {
      const response = await apiClient.post('/auth/login', credentials);
      return response.data;
    },
    register: async (userData: any) => {
      const response = await apiClient.post('/auth/register', userData);
      return response.data;
    }
  },
  products: {
    getAll: async (): Promise<Watch[]> => {
      try {
        const response = await apiClient.get('/products');
        return response.data;
      } catch (error) {
        console.warn("Backend unavailable, using mock data.");
        const { INITIAL_WATCHES } = await import('../constants');
        return INITIAL_WATCHES;
      }
    },
    create: async (watch: any) => {
      const response = await apiClient.post('/products', watch);
      return response.data;
    },
    delete: async (id: string) => {
      return apiClient.delete(`/products/${id}`);
    }
  },
  orders: {
    create: async (items: CartItem[]) => {
      const total = items.reduce((s, i) => s + i.price * i.quantity, 0);
      const response = await apiClient.post('/orders', { items, total });
      return response.data;
    }
  }
};
