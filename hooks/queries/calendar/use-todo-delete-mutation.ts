import { deleteTodo } from '@/api/calendar/request';
import { Todo } from '@/api/calendar/request.type';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useTodoDeleteMutation = (todo: Todo) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (calendarId: string) => deleteTodo(calendarId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['monthlyTodos', todo.dateTime.slice(0, 7)],
      });
      queryClient.invalidateQueries({ queryKey: ['dailyTodos', todo.dateTime.split('T')[0]] });
    },
  });
};

export default useTodoDeleteMutation;
