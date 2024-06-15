import { IFormInput } from '@/types/calendar';
import { axiosInstance } from '..';
import { DailyTodo, Pet, TodoById } from './request.type';
import { getCookie, setCookie } from 'cookies-next';

export async function fetchMonthlyTodos(yearMonth: string) {
  const { data } = await axiosInstance.get(`/calendar/month?yearMonth=${yearMonth}`);
  return data.data;
}

export async function fetchDailyTodos(yearMonthDate: string): Promise<DailyTodo[]> {
  const { data } = await axiosInstance.get(`calendar/day?date=${yearMonthDate}`);

  if (data.code !== 200) throw new Error(data.message);

  return data.data;
}

export async function fetchTodoById(calendarId: string, auth: string): Promise<TodoById> {
  const { data } = await axiosInstance.get(`/calendar/${calendarId}`, {
    headers: {
      Authorization: 'Bearer ' + auth,
    },
  });
  return data.data;
}

export async function postTodo(data: IFormInput) {
  await axiosInstance.post('/calendar', data);
}

export async function putTodoById(data: IFormInput, calendarId: number) {
  await axiosInstance.put(`/calendar/${calendarId}`, data);
}

export async function deleteTodoById(calendarId: string) {
  console.log('delete!');
  const { data } = await axiosInstance.delete(`/calendar/${calendarId}`);
  console.log(data);
}

export async function fetchPets(): Promise<Pet[]> {
  const { data } = await axiosInstance.get(`/my/pets`);
  return data.data;
}

export async function putTodoFinished(calendarId: string) {
  const { data } = await axiosInstance.put(`/calendar/completion/${calendarId}`);
  console.log(data);
}

export async function postRefreshToken() {
  const accessToken = getCookie('accessToken');
  const refreshToken = getCookie('refreshToken');

  const { data } = await axiosInstance.post('/refresh', {
    accessToken,
    refreshToken,
  });
  setCookie('accessToken', data.data);
}
