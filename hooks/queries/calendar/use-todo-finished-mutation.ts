import { putTodoFinished } from '@/api/calendar/request';
import { Todo } from '@/api/calendar/request.type';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useTodoFinishedMutation = (todo: Todo) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (calendarId: string) => putTodoFinished(calendarId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['dailyTodos', todo.dateTime.split('T')[0]] }),
    onError: () => queryClient.resetQueries({ queryKey: ['dailyTodos', todo.dateTime.split('T')[0]] }),
  });
};
export default useTodoFinishedMutation;
