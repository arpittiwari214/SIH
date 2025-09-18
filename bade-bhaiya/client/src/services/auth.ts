import api from './api';

export const login = async (credentials: any) => {
  const response = await api.post('/auth/login', credentials);
  return response.data;
};

export const register = async (userInfo: any) => {
  const response = await api.post('/auth/register', userInfo);
  return response.data;
};