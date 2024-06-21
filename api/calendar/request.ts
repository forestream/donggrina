import { IFormInput } from '@/types/calendar';
import { axiosInstance } from '..';
import { DailyTodo, MonthlyTodos, Pet, TodoById } from './request.type';

export async function fetchMonthlyTodos(yearMonth: string): Promise<MonthlyTodos[]> {
  const { data } = await axiosInstance.get(`/calendar/month?yearMonth=${yearMonth}`);
  return data.data;
}

export async function fetchDailyTodos(yearMonthDate: string): Promise<DailyTodo[]> {
  const { data } = await axiosInstance.get(`/calendar/day?date=${yearMonthDate}`);

  if (data.code !== 200) throw new Error(data.message);

  return data.data;
}

export async function fetchTodoById(calendarId: string, auth: string | null = null): Promise<TodoById> {
  const { data } = await axiosInstance.get(
    `/calendar/${calendarId}`,
    auth
      ? {
          headers: {
            Authorization: 'Bearer ' + auth,
          },
        }
      : {},
  );
  return data.data;
}

export async function postTodo(data: IFormInput) {
  await axiosInstance.post('/calendar', data);
}

export async function putTodoById(data: IFormInput, calendarId: number) {
  await axiosInstance.put(`/calendar/${calendarId}`, data);
}

export async function deleteTodoById(calendarId: string) {
  await axiosInstance.delete(`/calendar/${calendarId}`);
}

export async function fetchPets(): Promise<Pet[]> {
  const { data } = await axiosInstance.get(`/my/pets`);
  return data.data;
}

export async function putTodoFinished(calendarId: string) {
  await axiosInstance.put(`/calendar/completion/${calendarId}`);
}
