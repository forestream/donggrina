import { IFormInput } from '@/pages/calendar/create';
import { axiosInstance } from '..';

export async function postTodo(data: IFormInput) {
  console.log(data);
  const response = await axiosInstance.post('/calendar', data);
  console.log(response);
}
