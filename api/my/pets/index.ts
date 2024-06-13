import { axiosInstance } from '@/api';

interface PetsAddDataType {
  imageId: number;
  name: string;
  sex: string;
  birthDate: Date;
  adoptionDate: Date;
  type: string;
  species: string;
  weight: number;
  isNeutered: boolean;
}

export default class PetsApi {
  constructor() {}

  async petsAdd(data: PetsAddDataType) {
    return await axiosInstance.post('/my/pets', data);
  }

  async petsAllInquiry() {
    return await axiosInstance.get('/my/pets').then((res) => res.data);
  }
}
