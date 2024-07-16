import { useMutation, useQueryClient } from '@tanstack/react-query';
import MyFamilyApi from '@/apis/my/groups';

interface NameModifyType {
  name: string;
}

const myFamilyApi = new MyFamilyApi();

export const useMemberDeleteQuery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (variables: { targetId: number }) => {
      const { targetId } = variables;
      return await myFamilyApi.myFamilyDeleteMember(targetId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['familyDetails'], refetchType: 'active' });
    },
  });
};
export const useFamilyModifyQuery = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (variables: { data: NameModifyType }) => {
      const { data } = variables;
      return await myFamilyApi.myFamilyModify(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['familyDetails'], refetchType: 'active' });
    },
  });
};
