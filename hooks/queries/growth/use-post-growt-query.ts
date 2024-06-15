import GrowthAPI from '@/api/growth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FieldValues } from 'react-hook-form';

const growthAPI = new GrowthAPI();
const queryClient = useQueryClient();

export const useCreateGrotwthQuery = (data: FieldValues) => {
  return useMutation({
    mutationFn: async () => await growthAPI.createGrowth(data),
  });
};

export const useModifyGrowthQuery = (growthId: number) => {
  return useMutation({
    mutationFn: async () => await growthAPI.modifyGrowth(growthId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['modifyGrowth', growthId], refetchType: 'active' }),
  });
};

export const useDeleteGrowthQuery = (growthId: number) => {
  return useMutation({
    mutationFn: async () => await growthAPI.deleteGrowth(growthId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['deleteGrowth', growthId], refetchType: 'active' }),
  });
};
