import React from 'react';
import { Pet } from '@/api/calendar/request.type';
import { DiaryDetail } from '@/types/diary/details';
import { useFormContext } from 'react-hook-form';
import PetCheckbox from '@/components/calendar-monthly/pet-checkbox';

export interface DiaryEditPetsItemProps {
  pet: Pet;
  defaultPet?: boolean;
}

export default function DiaryEditPetsItem({ pet, defaultPet }: DiaryEditPetsItemProps) {
  const { register } = useFormContext<DiaryDetail>();

  return defaultPet ? (
    <li>
      <PetCheckbox petImage={pet.imageUrl} petName={pet.name} defaultPet={pet.name} register={register} />
    </li>
  ) : (
    <li>
      <PetCheckbox petImage={pet.imageUrl} petName={pet.name} register={register} />
    </li>
  );
}
