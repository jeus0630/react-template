import axios, { AxiosInstance } from 'axios';

export const useAxios = async (): Promise<AxiosInstance> => {
  const instance = await axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return instance;
};
