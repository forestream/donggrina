import PetsApi from '@/apis/my/pets';
import { useQuery } from '@tanstack/react-query';

const petsApi = new PetsApi();

export const useGetPetsAllQuery = () => {
  return useQuery({
    queryKey: ['pets'],
    queryFn: async () => await petsApi.petsAllInquiry(),
  });
};

export const useGetPetsDetailsQuery = (id: string) => {
  return useQuery({
    queryKey: ['petsDetail', id],
    queryFn: async () => await petsApi.petsDetailsInquiry(id),
  });
};
