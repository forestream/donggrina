import GrowthAPI from '@/api/growth';
import { AddGrowthData } from '@/types/growth/details';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const growthAPI = new GrowthAPI();

export const useCreateGrotwthMutation = () => {
  return useMutation({
    mutationFn: async (data: AddGrowthData) => await growthAPI.createGrowth(data),
  });
};

export const useModifyGrowthMutation = (growthId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => await growthAPI.modifyGrowth(growthId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['modifyGrowth', growthId], refetchType: 'active' }),
  });
};

export const useDeleteGrowthMutation = (growthId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => await growthAPI.deleteGrowth(growthId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['deleteGrowth', growthId], refetchType: 'active' }),
  });
};
