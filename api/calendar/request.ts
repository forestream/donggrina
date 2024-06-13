import { IFormInput } from '@/pages/calendar/create';
import { axiosInstance } from '..';
import { Pet, Todo } from './request.type';

export async function fetchMonthlyTodos(yearMonth: string) {
  console.log(yearMonth);
  const { data } = await axiosInstance.get(`/calendar/month?yearMonth=${yearMonth}`);
  return data.data;
}

export async function fetchDailyTodos(yearMonthDate: string): Promise<Todo[]> {
  const { data } = await axiosInstance.get(`calendar/day?date=${yearMonthDate}`);
  return data.data;
}

export async function postTodo(data: IFormInput) {
  console.log(data);
  const response = await axiosInstance.post('/calendar', data);
  console.log(response);
}

export async function fetchPets(): Promise<Pet[]> {
  const { data } = await axiosInstance.get(`/my/pets`);
  return data.data;
}

export async function putTodoFinished(calendarId: string) {
  const { data } = await axiosInstance.put(`/calendar/completion/${calendarId}`);
  console.log(data);
}
