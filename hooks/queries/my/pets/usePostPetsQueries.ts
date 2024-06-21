import { useMutation, useQueryClient } from '@tanstack/react-query';
import PetsApi, { PetsAddDataType } from '@/api/my/pets';

const petsApi = new PetsApi();

export const usePetsModifyQuery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (variables: { data: PetsAddDataType; petsId: string }) => {
      const { data, petsId } = variables;
      return await petsApi.petsModify(data, petsId);
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['petsDetail', variables.petsId], refetchType: 'active' });
    },
  });
};

export const usePetsAddQuery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (variables: { data: PetsAddDataType }) => {
      const { data } = variables;
      return await petsApi.petsAdd(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pets'], refetchType: 'active' });
    },
  });
};
