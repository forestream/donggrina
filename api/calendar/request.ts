import { IFormInput } from '@/pages/calendar/create';
import { axiosInstance } from '..';

export async function fetchTodos(yearMonth: string) {
  console.log(yearMonth);
  const { data } = await axiosInstance.get(`/calendar/month?yearMonth=${yearMonth}`);
  return data.data;
}

export async function postTodo(data: IFormInput) {
  console.log(data);
  const response = await axiosInstance.post('/calendar', data);
  console.log(response);
}
