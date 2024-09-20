import { deleteTodoById } from '@/apis/calendar/request';
import { DailyTodo, TodoById } from '@/apis/calendar/request.type';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useTodoDeleteMutation = (todo: DailyTodo | TodoById) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (calendarId: string) => deleteTodoById(calendarId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['monthlyTodos', todo.dateTime.slice(0, 7)],
      });
      queryClient.invalidateQueries({ queryKey: ['dailyTodos', todo.dateTime.split('T')[0]] });
    },
  });
};

export default useTodoDeleteMutation;
