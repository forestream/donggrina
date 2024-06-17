import { putTodoById } from '@/api/calendar/request';
import { IFormInput } from '@/types/calendar';
import { useMutation } from '@tanstack/react-query';

interface MutationArgumnets {
  data: IFormInput;
  id: number;
}

const useTodoPutMutation = () =>
  useMutation({
    mutationFn: ({ data, id }: MutationArgumnets) => putTodoById(data, id),
  });

export default useTodoPutMutation;
