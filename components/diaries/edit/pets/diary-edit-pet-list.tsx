import React from 'react';
import usePetsQuery from '@/hooks/queries/calendar/use-pets-query';
import DiaryEditPetsItem from '@/components/diaries/edit/pets/diary-edit-pets-item';
import styles from './diary-edit-pet-list.module.scss';

export default function DiaryEditPetList() {
  const petsQuery = usePetsQuery();

  return (
    <ul className={styles['pet-list']}>
      {petsQuery.data?.map((pet, index) => {
        if (index === 0) return <DiaryEditPetsItem pet={pet} key={pet.petId} defaultPet={true} />;
        return <DiaryEditPetsItem pet={pet} key={pet.petId} />;
      })}
    </ul>
  );
}
