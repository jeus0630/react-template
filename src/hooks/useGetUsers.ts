import { useQuery, UseQueryResult } from 'react-query';
import { useAxios } from '../utils/axios';

interface userGetResType {
  userId: number;
  statusCode: string;
  email: string;
  fullName: string;
  location: string;
}

const getUser = async (id: number): Promise<userGetResType> => {
  try {
    const { data } = await (await useAxios()).get(`/users/${id}`);
    return data;
  } catch (err: any) {
    throw new Error(err.response.status, { cause: err.response.data });
  }
};

export const useGetUser = (id: number): UseQueryResult<userGetResType, any> => {
  return useQuery<userGetResType, any>('user', async () => await getUser(id));
};
