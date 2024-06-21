export interface Pet {
  data: PetData[];
}

export interface PetData {
  petId: number;
  imageUrl: string;
  name: string;
}
