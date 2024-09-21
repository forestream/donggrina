import { IFormInput } from '@/types/calendar';
import { axiosInstance } from '..';
import { DailyTodo, MonthlyTodos, Pet, TodoById } from './request.type';

export async function fetchMonthlyTodos(yearMonth?: string): Promise<MonthlyTodos[]> {
  // const { data } = await axiosInstance.get(`/calendar/month?yearMonth=${yearMonth}`);
  // return data.data;
  const response = await fetch('http://localhost:5000/dailyTodos');
  const body = await response.json();

  const data = body
    .map((dailyTodo) => ({
      date: dailyTodo.id,
      count: dailyTodo.todos.length,
    }))
    .reduce((acc, outer) => {
      const found = acc.findIndex((inner) => inner.date === outer.date);
      if (found !== -1) {
        acc[found].count += outer.count;
        return acc;
      }

      return acc.concat(outer);
    }, []);

  console.log(data);
  return data;
}

export async function fetchDailyTodos(yearMonthDate?: string): Promise<DailyTodo[]> {
  // const { data } = await axiosInstance.get(`/calendar/day?date=${yearMonthDate}`);

  // if (data.code !== 200) throw new Error(data.message);

  // return data.data;
  const response = await fetch('http://localhost:5000/dailyTodos');
  const body = await response.json();
  const todo = body.filter((item: { id: number }) => item.id.toString() === yearMonthDate?.slice(-2)) ?? {
    todos: [],
  };
  const todos = todo.reduce((acc, e) => [...acc, ...e.todos], []);
  const todosWithId = todos.map((todo) => ({ ...todo, id: yearMonthDate?.slice(-2) }));
  return todosWithId;
}

export async function fetchTodoById(calendarId: string, auth: string | null = null): Promise<TodoById> {
  // const { data } = await axiosInstance.get(
  //   `/calendar/${calendarId}`,
  //   auth
  //     ? {
  //         headers: {
  //           Authorization: 'Bearer ' + auth,
  //         },
  //       }
  //     : {},
  // );
  // return data.data;
  const response = await fetch(`http://localhost:5000/dailyTodos/${calendarId}`);
  const body = await response.json();
  console.log(body);
  return body.todos[0];
}

const mock = {
  title: '사료 구매하기',
  category: '사료 구입',
  dateTime: '2024-07-15T09:00:00',
  memberProfileImageUrl: 'https://picsum.photos/id/23/200',
  nickname: '산도발',
  petProfileImageUrl: 'https://picsum.photos/id/37/200',
  petName: '바둑이',
  isFinished: false,
  isMine: true,
};

export async function postTodo(data: IFormInput) {
  // await axiosInstance.post('/calendar', data);
  console.log(data);
  await fetch('http://localhost:5000/dailyTodos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: new Date(data.dateTime).getDate(), todos: [{ ...mock, ...data }] }),
  });
}

export async function putTodoById(data: IFormInput, calendarId: number) {
  await axiosInstance.put(`/calendar/${calendarId}`, data);
}

export async function deleteTodoById(calendarId: string) {
  // await axiosInstance.delete(`/calendar/${calendarId}`);
  await fetch(`http://localhost:5000/dailyTodos/${calendarId}`, { method: 'DELETE' });
}

export async function fetchPets() {
  return (await axiosInstance.get(`/my/pets`)).data.data as Pet[];
}

export async function putTodoFinished(calendarId: string) {
  await axiosInstance.put(`/calendar/completion/${calendarId}`);
}
