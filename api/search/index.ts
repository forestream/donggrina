import { axiosInstance } from '..';
import { Group } from './index.type';

export async function fetchGroup(): Promise<Group> {
  const { data } = await axiosInstance.get('/my/groups');
  return data.data;
}
