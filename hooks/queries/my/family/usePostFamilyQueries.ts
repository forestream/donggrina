import { useMutation, useQueryClient } from '@tanstack/react-query';
import MyFamilyApi from '@/api/my/groups';

interface NameModifyType {
  name: string;
}

const myFamilyApi = new MyFamilyApi();

export const useMemberDeleteQuery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (variables: { groupId: number; targetId: number }) => {
      const { groupId, targetId } = variables;
      return await myFamilyApi.myFamilyDeleteMember(groupId, targetId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['familyDetails'], refetchType: 'active' });
    },
  });
};
export const useFamilyModifyQuery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (variables: { data: NameModifyType; groupId: number }) => {
      const { groupId, data } = variables;
      return await myFamilyApi.myFamilyModify(data, groupId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['familyDetails'], refetchType: 'active' });
    },
  });
};
