import { useMutation } from '@tanstack/react-query';
import { postTodo } from '@/api/calendar/request';
import { IFormInput } from '@/types/calendar';

const useTodoPostMutation = () =>
  useMutation({
    mutationFn: (data: IFormInput) => postTodo(data),
  });

export default useTodoPostMutation;
