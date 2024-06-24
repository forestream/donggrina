import React from 'react';
import { Pet } from '@/api/calendar/request.type';
import { DiaryDetail } from '@/types/diary/details';
import { useFormContext } from 'react-hook-form';
import PetCheckbox from '@/components/calendar-monthly/pet-checkbox';

export interface DiaryEditPetItemProps {
  pet: Pet;
  defaultPet?: boolean;
}

export default function DiaryEditPetItem({ pet, defaultPet }: DiaryEditPetItemProps) {
  const { register } = useFormContext<{ [key: string]: string[] }>();

  return defaultPet ? (
    <li>
      <PetCheckbox
        petImage={pet.imageUrl}
        petName={pet.name}
        defaultPet={pet.name}
        register={register}
        petId={pet.petId}
      />
    </li>
  ) : (
    <li>
      <PetCheckbox petImage={pet.imageUrl} petName={pet.name} register={register} petId={pet.petId} />
    </li>
  );
}
