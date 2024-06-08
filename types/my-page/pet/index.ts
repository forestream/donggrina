export interface Pet {
  data: PetData[];
}

export interface PetData {
  petId: number;
  profileImage: string;
  name: string;
}
