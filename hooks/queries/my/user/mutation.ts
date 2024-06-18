import { useMutation, useQueryClient } from '@tanstack/react-query';
import myPageApiInstance from '../../../../api/my/user';

export function useUpdateProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: myPageApiInstance.updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['my/profiles'] });
    },
  });
}
