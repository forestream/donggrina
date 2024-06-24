import React from 'react';
import styles from './diary-edit-pets.module.scss';
import usePetsQuery from '@/hooks/queries/calendar/use-pets-query';
import DiaryEditPetsItem from '@/components/diaries/edit/diary-edit-pets-item';

export default function DiaryEditPets() {
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
