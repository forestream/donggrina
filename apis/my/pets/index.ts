import { axiosInstance } from '@/apis';

export interface PetsAddDataType {
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

  async petsDetailsInquiry(id: string) {
    return await axiosInstance.get(`/my/pets/${id}`).then((res) => res.data);
  }

  async petsModify(data: PetsAddDataType, id: string) {
    return await axiosInstance.put(`/my/pets/${id}`, data);
  }
}
