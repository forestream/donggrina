import { fetchTodoById } from '@/apis/calendar/request';
import { useQuery } from '@tanstack/react-query';

const useTodoQuery = (id: string) =>
  useQuery({
    queryKey: ['todo', id],
    queryFn: () => fetchTodoById(id),
    placeholderData: (prevTodo) => prevTodo,
    initialData: {
      id: -1,
      title: '',
      memo: '',
      category: '산책',
      dateTime: '',
      writerProfileImageUrl: '',
      writerNickName: '',
      petProfileImageUrl: '',
      petName: '',
      isFinished: false,
      isMine: false,
    },
  });

export default useTodoQuery;
