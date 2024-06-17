import { useMutation, useQueryClient } from '@tanstack/react-query';
import PetsApi, { PetsAddDataType } from '@/api/my/pets';
import { useRouter } from 'next/router';

const petsApi = new PetsApi();

export const usePetsModifyQuery = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (variables: { data: PetsAddDataType; petsId: string }) => {
      const { data, petsId } = variables;
      return await petsApi.petsModify(data, petsId);
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ['petsDetail', variables.petsId], refetchType: 'active' });
      router.push('/start-pet/finish');
    },
  });
};

export const usePetsAddQuery = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (variables: { data: PetsAddDataType }) => {
      const { data } = variables;
      return await petsApi.petsAdd(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pets'], refetchType: 'active' });
      router.push('/start-pet/finish');
    },
  });
};
