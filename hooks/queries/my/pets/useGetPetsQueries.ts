import PetsApi from '@/api/my/pets';
import { useQuery } from '@tanstack/react-query';

const petsApi = new PetsApi();

export default class PetsGetQuery {
  constructor() {}

  petsAllInquiry() {
    return useQuery({
      queryKey: ['pets'],
      queryFn: () => petsApi.petsAllInquiry(),
    });
  }
}
