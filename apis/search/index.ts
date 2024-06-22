import { axiosInstance } from '..';
import { Group, TodoByQueries } from './index.type';

export async function fetchGroup(): Promise<Group> {
  const { data } = await axiosInstance.get('/my/groups');
  return data.data;
}

export async function fetchTodosByQueries(searchParams: string): Promise<TodoByQueries[]> {
  if (!searchParams) return [];
  const { data } = await axiosInstance.get(`/calendar/search${searchParams}`);
  return data.data;
}

export async function fetchGrowthsByQueries(searchParams: string): Promise<TodoByQueries[]> {
  if (!searchParams) return [];
  const { data } = await axiosInstance.get(`/growth/search${searchParams}`);
  return data.data;
}

export async function fetchDiariesByQueries(searchParams: string): Promise<TodoByQueries[]> {
  if (!searchParams) return [];
  const { data } = await axiosInstance.get(`/diaries/search${searchParams}`);
  return data.data;
}
