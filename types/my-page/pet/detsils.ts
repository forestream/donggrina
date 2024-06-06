export interface PetDetails {
  data: PetDetailsData;
}

export interface PetDetailsData {
  url: string;
  name: string;
  sex: string;
  birthDate: Date;
  adoptionDate: Date;
  type: string;
  species: string;
  weight: number;
  isNeutered: boolean;
}
