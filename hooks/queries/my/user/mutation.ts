import { useMutation, useQueryClient } from '@tanstack/react-query';
import myPageApiInstance from '../../../../apis/my/user';

export function useUpdateProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['my/profile'],
    mutationFn: myPageApiInstance.updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['my/profile'] });
    },
  });
}
