import GrowthAPI from '@/apis/growth';
import { GrowthDetailsData } from '@/types/growth/details';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const growthAPI = new GrowthAPI();

export const useCreateGrotwthMutation = () => {
  return useMutation({
    mutationFn: async (data: GrowthDetailsData) => await growthAPI.createGrowth(data),
  });
};

export const useModifyGrowthMutation = (growthId: number) => {
  return useMutation({
    mutationFn: (data: GrowthDetailsData) => growthAPI.modifyGrowth(growthId, data),
  });
};

export const useDeleteGrowthMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (growthId: number) => await growthAPI.deleteGrowth(growthId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['growth'], refetchType: 'active' }),
  });
};
